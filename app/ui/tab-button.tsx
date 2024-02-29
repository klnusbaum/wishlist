'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function TabButton({ text, href }: { text: string, href: string }) {
    const pathname = usePathname()
    return <Link href={href} className={clsx(
        'text-md border-2 border-blue-900 text-center rounded-t-xl p-2 grow',
        {
            'bg-blue-900': pathname === href,
            'bg-blue-700': pathname != href,
        },
    )}>{text}</Link>
}
