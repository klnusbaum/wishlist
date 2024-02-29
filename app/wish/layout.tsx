import TabButton from '@/app/ui/tab-button';

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="flex justify-center h-screen bg-slate-800 font-sans">
            <div className="flex flex-col w-screen max-w-screen-md">
                <div className="flex content-around items-center m-2">
                    <h1 className="grow text-2xl p-2">Wishlist 🌠</h1>
                    <a href="/logout" className="bg-slate-600 rounded p-1 text-sm">Logout</a>
                </div>
                <div className="grow overflow-y-scroll">
                    {children}
                </div>
                <div className="flex justify-stretch items-stretch">
                    <TabButton href="/wish/list">Wishes</TabButton>
                    <TabButton href="/wish/friends">Friends</TabButton>
                    <TabButton href="/wish/settings">⚙️</TabButton>
                    <TabButton href="/wish/add">➕</TabButton>
                </div>
            </div>
        </main>
    );
}
