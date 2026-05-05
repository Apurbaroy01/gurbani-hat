"use client";

import { FaMapMarkerAlt, FaWeight, FaStar } from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

const AnimalCard = ({ animal }) => {
    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">

            {/* Image */}
            <div className="relative">
                <Image
                    src={animal.image}
                    alt={animal.name}
                    className="w-full h-52 object-cover"
                    width={500}
                    height={300}
                />

                {/* Category */}
                <span className="absolute top-3 left-3 bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
                    {animal.category}
                </span>

                {/* Rating */}
                <span className="absolute bottom-3 right-3 bg-white text-yellow-600 text-sm px-2 py-1 rounded-md flex items-center gap-1 shadow">
                    <FaStar /> {animal.rating}
                </span>
            </div>

            {/* Content */}
            <div className="p-4">
                <h2 className="text-lg font-semibold">{animal.name}</h2>
                <p className="text-sm text-gray-500">{animal.breed}</p>

                <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
                    <span className="flex items-center gap-1">
                        <FaMapMarkerAlt /> {animal.location}
                    </span>
                    <span className="flex items-center gap-1">
                        <FaWeight /> {animal.weight} kg
                    </span>
                    <span className="flex items-center gap-1">
                        <MdOutlineAccessTime /> {animal.age} years
                    </span>
                </div>

                {/* Tags */}
                <div className="flex gap-2 mt-3 flex-wrap">
                    <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs">
                        Premium meat
                    </span>
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                        Healthy coat
                    </span>
                </div>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center p-4 border-t">
                <div>
                    <p className="text-xs text-gray-500">Price</p>
                    <p className="text-green-600 font-bold">
                        BDT {animal.price.toLocaleString()}
                    </p>
                </div>

                <Link href={`/animals/${animal.id}`}>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default AnimalCard;