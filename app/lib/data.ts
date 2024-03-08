import { sql } from '@vercel/postgres';
import {
    WishListItem
} from './definitions';
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchWishListItems(userId: string) {
    noStore();

    try {
        const data = await sql<WishListItem>`SELECT * FROM wishListItems where userId = ${userId};`;
        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch revenue data.');
    }
}

export async function insertWishListItem(userId: string, name: string, url: string, price: number, imgURL?: string) {

    await sql`
      INSERT INTO wishListItems (userId, url, imgURL, name, price)
      VALUES (${userId}, ${url}, ${imgURL}, ${name}, ${price})
    `;
    return 0
}
