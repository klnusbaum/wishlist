import WishListItemRow from "@/app/ui/wish-list-item-row";

const items = [
    {
        id: "1",
        name: "flashlight",
        price: "20",
        url: "",
        imgURL: "",
    },
    {
        id: "2",
        name: "tv",
        price: "400",
        url: "",
        imgURL: "",
    },
    {
        id: "3",
        name: "radio",
        price: "10",
        url: "",
        imgURL: "",
    },
    {
        id: "4",
        name: "dresser",
        price: "200",
        url: "",
        imgURL: "",
    },
    {
        id: "5",
        name: "Lamp",
        price: "100",
        url: "",
        imgURL: "",
    },
    {
        id: "6",
        name: "dresser",
        price: "200",
        url: "",
        imgURL: "",
    },
    {
        id: "7",
        name: "dresser",
        price: "200",
        url: "",
        imgURL: "",
    },
    {
        id: "8",
        name: "dresser",
        price: "200",
        url: "",
        imgURL: "",
    },
];


export default function Page() {
    return <div>
        {items.map((item) => (
            <WishListItemRow key={item.id} item={item} />
        ))}
    </div>
}
