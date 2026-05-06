"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import ThemTaggle from "../ThemTaggle/ThemTaggle";
import NavLink from "./NavLink";
import Profile from "./Profile";
import Image from "next/image";

const Navbar = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    console.log(user, isPending, "user");

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
                                    {/* Open Profile Modal Button */}
                                    <button
                                        onClick={() =>
                                            document.getElementById("my_modal_5").showModal()
                                        }
                                        className="relative group"
                                    >

                                        {/* Profile Image */}
                                        <div className="avatar">
                                            <div className="w-14 rounded-full border-b-blue-500 border-2 ring ring-primary ring-offset-base-100 ring-offset-2 transition-all ">
                                                <Image
                                                    src="https://i.ibb.co/4pDNDk1/avatar.png"
                                                    alt="profile"
                                                    height={50}
                                                    width={50}
                                                />
                                            </div>
                                        </div>

                                        {/* Online Dot */}
                                        <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
                                    </button>
                                </>
                            ) : (
                                <Link href="/login" className="btn btn-dash">Login</Link>
                            )
                        )}

                        <Profile />
                    </div>
                </header>
            </nav>
        </div>
    );
};

export default Navbar;