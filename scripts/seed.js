const { db } = require('@vercel/postgres');
const bcrypt = require('bcrypt');

const users = [
    {
        id: '410544b2-4001-4271-9855-fec4b6a6442a',
        name: 'User',
        email: 'user@nextmail.com',
        password: '123456',
    },
];

const wishListItems = [
    {
        id: "1b5bde1c-3217-478d-a38c-0069819732e1",
        userId: "410544b2-4001-4271-9855-fec4b6a6442a",
        name: "flashlight",
        price: 20,
        url: "https://www.amazon.com/Adjustable-Tactical-Flashlight-Zoomable-Batteries/dp/B005FEGYCO/",
    },
    {
        id: "27cb82f4-b384-4995-8048-d6d49cbc455c",
        userId: "410544b2-4001-4271-9855-fec4b6a6442a",
        name: "tv",
        price: 400,
        url: "https://www.amazon.com/INSIGNIA-42-inch-Class-Smart-NS-42F201NA23/dp/B0BCMND272/",
    },
    {
        id: "8a4f2f21-a146-476a-8c44-02c41c8de1a2",
        userId: "410544b2-4001-4271-9855-fec4b6a6442a",
        name: "radio",
        price: 10,
        url: "https://www.amazon.com/DreamSky-Reception-Headphone-Transistor-Emergency/dp/B088ZQ5DYQ/",
    },
    {
        id: "e684495d-f040-44e7-8068-9bd0f3fc34ce",
        userId: "410544b2-4001-4271-9855-fec4b6a6442a",
        name: "dresser",
        price: 200,
        url: "https://www.amazon.com/WLIVE-9-Drawer-Entryway-Organizer-Textured/dp/B095PF22B8/",
    },
    {
        id: "0b38b71b-c2dc-4a04-8279-5d22c9010a27",
        userId: "410544b2-4001-4271-9855-fec4b6a6442a",
        name: "Lamp",
        price: 100,
        url: "https://www.amazon.com/Bedside-Lamp-USB-port-Nightstand/dp/B087CDBKCH/",
    },
    {
        id: "147b74f3-d49b-4c98-91a5-f95560b81211",
        userId: "410544b2-4001-4271-9855-fec4b6a6442a",
        name: "Nightstand",
        price: 200,
        url: "https://www.amazon.com/LUCKNOCK-Nightstand-Mid-Century-Minimalist-Practical/dp/B0B7K81BQN/",
    },
    {
        id: "a99a0ec0-740f-4376-b748-53a1327854ce",
        userId: "410544b2-4001-4271-9855-fec4b6a6442a",
        name: "Jig Saw",
        price: 200,
        url: "https://www.amazon.com/DEWALT-DCS334B-Brushless-Tool-Only/dp/B07JPFHQKG/",
    },
    {
        id: "8630ab5e-a609-4012-bc02-dcd9d0d3d2b6",
        userId: "410544b2-4001-4271-9855-fec4b6a6442a",
        name: "Blue Tooth Speaker",
        price: 200,
        url: "https://www.amazon.com/Bluetooth-EarFun-Portable-Waterproof-Dustproof/dp/B0B1PJ5SQ7",
    },
];

async function seedUsers(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        // Create the "users" table if it doesn't exist
        const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `;

        console.log(`Created "users" table`);

        // Insert data into the "users" table
        const insertedUsers = await Promise.all(
            users.map(async (user) => {
                const hashedPassword = await bcrypt.hash(user.password, 10);
                return client.sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
            }),
        );

        console.log(`Seeded ${insertedUsers.length} users`);

        return {
            createTable,
            users: insertedUsers,
        };
    } catch (error) {
        console.error('Error seeding users:', error);
        throw error;
    }
}
async function seedWishListItems(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        // Create the "users" table if it doesn't exist
        const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS wishListItems (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        userId UUID NOT NULL,
        name VARCHAR(255) NOT NULL,
        url TEXT NOT NULL,
        imgURL TEXT,
        price INT NOT NULL,
        FOREIGN KEY (user_id) REFERNCES users(id)
      );
    `;

        console.log(`Created "users" table`);

        // Insert data into the "users" table
        const inseredWishListItems = await Promise.all(
            wishListItems.map(async (item) => {
                return client.sql`
        INSERT INTO wishListItems (id, userId, url, imgURL, name, price)
        VALUES (${item.id}, ${item.userId}, ${item.url}, ${item.imgURL}, ${item.name}, ${item.price})
        ON CONFLICT (id) DO NOTHING;
      `;
            }),
        );

        console.log(`Seeded ${inseredWishListItems.length} wish list items`);

        return {
            createTable,
            wishListItems: inseredWishListItems,
        };
    } catch (error) {
        console.error('Error seeding wish list items:', error);
        throw error;
    }
}

async function main() {
    const client = await db.connect();

    await seedUsers(client);
    await seedWishListItems(client);

    await client.end();
}

main().catch((err) => {
    console.error(
        'An error occurred while attempting to seed the database:',
        err,
    );
})
