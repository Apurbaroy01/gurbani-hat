"use client";

import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="py-20">
            <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

                <div>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Find Your Perfect Qurbani Animal 🐄
                    </h1>

                    <p className="mt-4 text-gray-600">
                        সহজে বুকিং করুন গরু ও ছাগল। নিরাপদ, দ্রুত এবং নির্ভরযোগ্য।
                    </p>

                    <Link href="/animals">
                        <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700">
                            Browse Animals
                        </button>
                    </Link>
                </div>

                <div>
                    <Image
                        src="https://images.unsplash.com/photo-1596733430284-f7437764b1a9"
                        alt="cow"
                        className="rounded-xl shadow-lg"
                        width={500}
                        height={300}
                    />
                </div>

            </div>
        </section>
    );
};

export default Hero;