"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { redirect } from "next/navigation";
import {
    FaEnvelope,
    FaEdit,
    FaTimes,
    FaSignOutAlt,
} from "react-icons/fa";

const Profile = () => {
    const handleLogout = async () => {
        await authClient.signOut();

        // Close Modal
        document.getElementById("my_modal_5").close();

        redirect("/");
    };
    return (
        <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
        >
            <div className="modal-box max-w-md p-0 overflow-hidden rounded-3xl bg-base-100 border border-base-300 shadow-2xl">

                {/* Top Section */}
                <div className="relative h-20 bg-gradient-to-r from-primary via-secondary to-accent">

                    {/* Close Button */}
                    <form
                        method="dialog"
                        className="absolute top-4 right-4"
                    >
                        <button className="btn btn-circle btn-sm border-0 bg-white/20 text-white hover:bg-white hover:text-black">
                            <FaTimes />
                        </button>
                    </form>

                    {/* Profile Image */}
                    <div className="absolute -bottom-14 left-1/2 -translate-x-1/2">
                        <div className="avatar">
                            <div className="w-28 rounded-full ring ring-base-100 ring-offset-4 ring-offset-base-100 shadow-xl">
                                <Image
                                    src="https://i.ibb.co/4pDNDk1/avatar.png"
                                    alt="profile"
                                    width={200}
                                    height={200}
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="px-6 pt-16 pb-8">

                    {/* Name */}
                    <div className="text-center">
                        <h2 className="text-2xl font-bold">
                            Apurba Roy
                        </h2>

                        <p className="text-sm text-base-content/60 mt-1">
                            MERN Stack Developer
                        </p>
                    </div>

                    {/* Email Card */}
                    <div className="mt-8 bg-base-200 rounded-2xl p-4 flex items-center gap-4 hover:bg-base-300 transition-all">

                        <div className="bg-primary text-white p-3 rounded-xl text-lg">
                            <FaEnvelope />
                        </div>

                        <div>
                            <p className="text-xs text-base-content/60">
                                Email
                            </p>

                            <h4 className="font-semibold text-sm">
                                apurba@gmail.com
                            </h4>
                        </div>
                    </div>
                    {/* Buttons */}
                    <div className="grid grid-cols-2 gap-4 mt-8">

                        {/* Edit */}
                        <button className="btn btn-primary rounded-2xl">
                            <FaEdit />
                            Edit
                        </button>

                        {/* Logout */}
                        <button onClick={() => handleLogout()}
                            className="btn btn-error rounded-2xl">
                            <FaSignOutAlt />
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </dialog>
    );
};

export default Profile;