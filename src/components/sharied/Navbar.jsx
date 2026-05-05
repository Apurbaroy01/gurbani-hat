"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import ThemTaggle from "../ThemTaggle/ThemTaggle";
import NavLink from "./NavLink";

const Navbar = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    console.log(user, isPending, "user");

    const handleLogout = async () => {
        await authClient.signOut();
    };


    return (
        <div>
            {/* Basic */}
            <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
                <header className="flex h-16 items-center justify-between px-6">
                    <div className="flex items-center gap-3">
                        <h2 className="font-bold text-2xl">Qurbani<span className="text-primary"> Hat</span></h2>
                    </div>
                    <div className="flex items-center gap-4">
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/animals">All Animals</NavLink>
                    </div>
                    <div className="flex items-center gap-4">
                        <ThemTaggle />

                        {isPending ? (
                            <span>Loading...</span>
                        ) : (
                            user ? (
                                <>
                                    <p>{user.name}</p>
                                    <button className="btn btn-primary" onClick={()=>handleLogout()}>Logout</button>
                                </>
                            ) : (
                                <Link href="/login">Login</Link>
                            )
                        )}


                    </div>
                </header>
            </nav>
        </div>
    );
};

export default Navbar;