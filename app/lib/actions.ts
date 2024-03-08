'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { insertWishListItem } from './data';

const WishListItemSchema = z.object({
    name: z.string(),
    price: z.coerce
        .number()
        .gt(0, { message: 'Please enter a price create than $0' }),
    url: z.string(),
});

export type State = {
    errors?: {
        name?: string[];
        url?: string[];
        price?: string[];
    };
    message?: string | null;
};

export async function createWish(prevState: State, formData: FormData) {
    const validatedFields = WishListItemSchema.safeParse({
        name: formData.get('name'),
        url: formData.get('url'),
        price: formData.get('price'),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Wish List Item.',
        };
    }

    const { name, url, price } = validatedFields.data;
    const priceInCents = price * 100;

    try {
        insertWishListItem('410544b2-4001-4271-9855-fec4b6a6442a', name, url, priceInCents);
    } catch (error) {
        return {
            message: 'Database Error: Failed to Create Wish List Item.',
        };
    }

    revalidatePath('/wish/list');
    redirect('/wish/list');
}
