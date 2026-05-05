import { getTask } from "@/components/lib/data";
import Image from "next/image";
import { FaMapMarkerAlt, FaStar, FaWeight } from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";


const AnimalsDetails = async ({ params }) => {
    const { id } = await params;

    const tasks = await getTask();
    const animal = tasks.find((animal) => animal.id === Number(id));
    console.log("animal", animal);

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <div className="grid md:grid-cols-2 gap-8">

                {/* Image */}
                <div className="relative">
                    <Image
                        src={animal.image}
                        alt={animal.name}
                        className="w-full h-[400px] object-cover rounded-2xl shadow"
                        width={500}
                        height={300}
                        loading="lazy"
                    />

                    <span className="absolute top-4 left-4 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                        {animal.category}
                    </span>

                    <span className="absolute bottom-4 right-4 bg-white px-3 py-1 rounded-lg shadow flex items-center gap-1 text-yellow-600">
                        <FaStar /> {animal.rating}
                    </span>
                </div>

                {/* Info */}
                <div className="space-y-4">

                    <h1 className="text-3xl font-bold">{animal.name}</h1>
                    <p className="text-gray-500">{animal.breed}</p>

                    <p className="text-lg text-green-600 font-semibold">
                        ৳ {animal.price.toLocaleString()}
                    </p>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
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

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">
                        Healthy hybrid cow with excellent meat quality. Raised in a natural environment with organic feed. Perfect for Qurbani.
                    </p>

                    {/* Extra Details */}
                    <div className="border border-gray-200 p-4 rounded-xl space-y-2 text-sm">
                        <p><strong>Vaccinated:</strong> {animal.vaccinated}</p>
                        <p><strong>Food:</strong> {animal.food}</p>
                        <p><strong>Seller:</strong> {animal.seller}</p>
                    </div>

                    {/* CTA */}
                    <button className="w-full mt-4 bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition">
                        Book Now
                    </button>

                </div>
            </div>
        </div>
    );
};

export default AnimalsDetails;