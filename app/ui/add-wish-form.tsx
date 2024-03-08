'use client';

import { useFormState } from 'react-dom';
import { createWish } from '@/app/lib/actions';
import Link from 'next/link';

export default function WishForm() {
    const initialState = { message: null, errors: {} };
    const [state, dispatch] = useFormState(createWish, initialState);
    return (
        <form action={dispatch}>
            <div className="rounded-md bg-slate-600 p-4 m-2 md:p-6">
                {/* Name */}
                <div className="mb-4">
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
                        Name
                    </label>
                    <div className="relative">
                        <input
                            id="name"
                            name="name"
                            className="peer block w-full cursor-pointer rounded-md border py-2 pl-2 text-sm outline-2 bg-slate-600 placeholder:bg-slate-600"
                            defaultValue=""
                            placeholder="My Item"
                            aria-describedby="name-error"
                        >
                        </input>
                    </div>
                    <div id="name-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.name &&
                            state.errors.name.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                </p>
                            ))}
                    </div>
                </div>
                {/* Name */}
                <div className="mb-4">
                    <label htmlFor="url" className="mb-2 block text-sm font-medium">
                        Url
                    </label>
                    <div className="relative">
                        <input
                            id="url"
                            name="url"
                            className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
                            placeholder="https://www.example.com/product"
                            defaultValue=""
                            aria-describedby="url-error"
                        >
                        </input>
                    </div>
                    <div id="url-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.url &&
                            state.errors.url.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                </p>
                            ))}
                    </div>
                </div>

                {/* Price */}
                <div className="mb-4">
                    <label htmlFor="price" className="mb-2 block text-sm font-medium">
                        Price
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="price"
                                name="price"
                                type="number"
                                step="0.01"
                                placeholder="Enter USD amount"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
                                aria-describedby="price-error"
                            />
                        </div>
                    </div>
                    <div id="price-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.price &&
                            state.errors.price.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                </p>
                            ))}
                    </div>
                </div>

                <div aria-live="polite" aria-atomic="true">
                    {state.message ? (
                        <p className="mt-2 text-sm text-red-500">{state.message}</p>
                    ) : null}
                </div>
            </div>
            <div className="mt-6 flex justify-end gap-4">
                <Link
                    href="/wish/list"
                    className="flex h-10 items-center rounded-lg bg-slate-600 px-4 text-sm font-medium transition-colors"
                >
                    Cancel
                </Link>
                <button type="submit" className="bg-green-600 rounded mr-2 p-2" >Add Wish</button>
            </div>
        </form>
    );
}
