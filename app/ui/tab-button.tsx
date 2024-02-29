'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function TabButton({ children, href }: { children: React.ReactNode, href: string }) {
    const pathname = usePathname()
    return <Link href={href} className={clsx(
        'text-md text-center border-slate-600 border-2 rounded-b-xl p-2 grow',
        {
            'bg-slate-600': pathname === href,
        },
    )}>{children}</Link>
}
