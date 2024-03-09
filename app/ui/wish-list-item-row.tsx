import { WishListItem } from "@/app/lib/definitions";
import { CheckIcon, LinkIcon } from '@heroicons/react/16/solid';
import Link from "next/link";


export default function WishListItemRow({ item }: { item: WishListItem }) {
    return <div className="flex justify-between items-center">
        <div className="h-20 w-20 min-w-20 bg-slate-300 m-4 rounded-lg"></div>
        <div className="grow self-stretch flex flex-col justify-evenly my-4">
            <div className="text-xl">{item.name}</div>
            <Link href={item.url} className="text-md text-slate-600">Link <LinkIcon className="size-4 inline" /></Link>
            <div className="text-md">{formatPrice(item.price)}</div>
        </div>
        <CheckIcon className="bg-green-600 m-2 rounded size-12 md:size-16" />
    </div >
}

function formatPrice(amount: number) {
    return (amount / 100).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    });
}
