import { WishListItem } from "@/app/lib/definitions";

export default function WishListItemRow({ item }: { item: WishListItem }) {
    return <div className="flex justify-between items-center">
        <div className="h-20 w-20 min-w-20 bg-slate-300 m-4 rounded-lg"></div>
        <div className="grow self-stretch flex flex-col justify-evenly">
            <div className="text-2xl">{item.name}</div>
            <div className="text-lg">${item.price}</div>
        </div>
        <div className="bg-slate-600 m-2 rounded size-14 md:size-16 grid justify-center items-center"><i className="gg-trash list-icon-size" ></i></div>
        <div className="bg-green-600 m-2 rounded size-14 md:size-16 grid justify-center items-center"><i className="gg-check-o list-icon-size"></i></div>
    </div >
}
