"use client";

import Image from "next/image";
import Link from "next/link";

const animals = [
    {
        id: 1,
        name: "Deshi Cow",
        price: 120000,
        location: "Bogura",
        image: "https://i.ibb.co/8r8YB1m/cow.png",
    },
    {
        id: 2,
        name: "Sahiwal Cow",
        price: 150000,
        location: "Rajshahi",
        image: "https://i.ibb.co/8r8YB1m/cow.png",
    },
    {
        id: 3,
        name: "Black Goat",
        price: 30000,
        location: "Dhaka",
        image: "https://i.ibb.co/8r8YB1m/cow.png",
    },
    {
        id: 4,
        name: "White Goat",
        price: 28000,
        location: "Khulna",
        image: "https://i.ibb.co/8r8YB1m/cow.png",
    },
];

const FeaturedAnimals = () => {
    return (
        <section className="py-16 max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10">
                Featured Animals
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
                {animals.map((animal) => (
                    <div
                        key={animal.id}
                        className="bg-white rounded-xl shadow hover:shadow-lg transition p-4"
                    >
                        <Image
                            src={animal.image}
                            alt={animal.name}
                            className="h-40 w-full object-cover rounded-lg"
                            width={400}
                            height={300}
                        />

                        <h3 className="mt-3 font-semibold">{animal.name}</h3>
                        <p className="text-sm text-gray-500">{animal.location}</p>

                        <p className="mt-2 font-bold text-green-600">
                            ৳ {animal.price}
                        </p>

                        <Link href={`/animals/${animal.id}`}>
                            <button className="mt-3 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
                                View Details
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedAnimals;