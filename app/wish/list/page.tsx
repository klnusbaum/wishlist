import WishListItemRow from "@/app/ui/wish-list-item-row";

const items = [
    {
        id: "1",
        userId: "1",
        name: "flashlight",
        price: 20,
        url: "",
        img_url: "",
    },
    {
        id: "2",
        userId: "1",
        name: "tv",
        price: 400,
        url: "",
        img_url: "",
    },
    {
        id: "3",
        userId: "1",
        name: "radio",
        price: 10,
        url: "",
        img_url: "",
    },
    {
        id: "4",
        userId: "1",
        name: "dresser",
        price: 200,
        url: "",
        img_url: "",
    },
    {
        id: "5",
        userId: "1",
        name: "Lamp",
        price: 100,
        url: "",
        img_url: "",
    },
    {
        id: "6",
        userId: "1",
        name: "dresser",
        price: 200,
        url: "",
        img_url: "",
    },
    {
        id: "7",
        userId: "1",
        name: "dresser",
        price: 200,
        url: "",
        img_url: "",
    },
    {
        id: "8",
        userId: "1",
        name: "dresser",
        price: 200,
        url: "",
        img_url: "",
    },
];


export default function Page() {
    return <div>
        {items.map((item) => (
            <WishListItemRow key={item.id} item={item} />
        ))}
    </div>
}
