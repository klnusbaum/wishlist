import { sql } from '@vercel/postgres';
import {
WishListItem
} from './definitions';
import { unstable_noStore as noStore } from 'next/cache';
export async function fetchWishListItems(userId : string) {
  // Add noStore() here to prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).
  noStore();

  try {
    // Artificially delay a response for demo purposes.
    // Don't do this in production :)

    // console.log('Fetching revenue data...');
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    const data = await sql<WishListItem>`SELECT * FROM wishListItems where userId = ${userId};`;

    // console.log('Data fetch completed after 3 seconds.');

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}
