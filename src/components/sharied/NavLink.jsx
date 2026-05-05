"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
    const pathname = usePathname();

    const isActive = pathname === href || pathname.startsWith(href + "/");

    return (
        <Link
            href={href}
            className={`px-4 py-2 rounded-lg transition ${isActive
                    ? "text-green-600 underline underline-offset-8 decoration-2 decoration-green-600"
                    : "text-gray-600 hover:text-green-600"
                }`}
        >
            {children}
        </Link>
    );
};

export default NavLink;