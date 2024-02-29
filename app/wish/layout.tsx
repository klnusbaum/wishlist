import TabButton from '@/app/ui/tab-button';

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="flex justify-center h-screen bg-slate-800 text-gray-300 font-sans">
            <div className="flex flex-col w-screen max-w-screen-md">
                <div className="flex content-around items-center m-2">
                    <h1 className="grow text-2xl p-2">Wishlist 🌠</h1>
                    <a href="/logout" className="bg-indigo-800 rounded p-2 text-sm">Logout</a>
                </div>
                <div className="flex justify-between items-center">
                    <TabButton text="My List" href="/wish/list" />
                    <TabButton text="Friend Lists" href="/wish/friends" />
                    <TabButton text="Settings" href="/wish/settings" />
                </div>
                <div className="grow overflow-y-scroll">
                    {children}
                </div>
            </div>
        </main>
    );
}
