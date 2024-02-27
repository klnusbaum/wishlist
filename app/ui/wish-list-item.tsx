import { WishListItem } from "@/app/lib/definitions";

export default function WishListItemRow({ item }: { item: WishListItem }) {
    return <div key={item.id} className="flex justify-between content-center">
        <div className="h-20 w-20 min-w-20 bg-gray-300 m-4 rounded-lg"></div>
        <div className="grow flex flex-col justify-evenly">
            <div className="text-2xl">{item.name}</div>
            <div className="text-lg">${item.price}</div>
        </div>
        <div className="text-base self-center bg-blue-700 m-2 p-3 rounded">Edit</div>
        <div className="text-base self-center bg-rose-500 m-2 p-3 rounded">Delete</div>
    </div>
}
