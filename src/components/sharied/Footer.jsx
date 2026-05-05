
import Link from "next/link";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 mt-16">

            <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">

                {/* Logo + About */}
                <div>
                    <h2 className="text-xl font-bold text-white mb-3">
                        QurbaniHat
                    </h2>
                    <p className="text-sm leading-relaxed">
                        Trusted livestock marketplace for Qurbani. সহজে গরু ও ছাগল বুকিং করুন নিরাপদে।
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                        Quick Links
                    </h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link href="/" className="hover:text-green-400">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/animals" className="hover:text-green-400">
                                All Animals
                            </Link>
                        </li>
                        <li>
                            <Link href="/login" className="hover:text-green-400">
                                Login
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                        Contact
                    </h3>
                    <p className="text-sm">📍 Dhaka, Bangladesh</p>
                    <p className="text-sm">📞 +880 1234-567890</p>
                    <p className="text-sm">✉ support@qurbanihat.com</p>

                    {/* Social */}
                    <div className="flex gap-4 mt-4 text-xl">
                        <FaFacebook className="hover:text-green-400 cursor-pointer" />
                        <FaGithub className="hover:text-green-400 cursor-pointer" />
                        <FaTwitter className="hover:text-green-400 cursor-pointer" />
                    </div>
                </div>

            </div>

            {/* Bottom */}
            <div className="border-t border-gray-700 text-center py-4 text-sm">
                © {new Date().getFullYear()} QurbaniHat. All rights reserved.
            </div>

        </footer>
    );
};

export default Footer;