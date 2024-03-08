import WishListItemRow from "@/app/ui/wish-list-item-row";
import { fetchWishListItems } from "@/app/lib/data";

export default async function Page() {
    const items = await fetchWishListItems('410544b2-4001-4271-9855-fec4b6a6442a');
    return <div>
        {items.map((item) => (
            <WishListItemRow key={item.id} item={item} />
        ))}
    </div>
}
