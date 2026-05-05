"use client";

const TopBreeds = () => {
    const breeds = [
        "Deshi",
        "Sahiwal",
        "Brahman",
        "Black Bengal Goat",
    ];

    return (
        <section className=" border-t border-b py-16 max-w-6xl mx-auto px-4 text-center">

            <h2 className="text-3xl font-bold mb-10">
                Top Breeds
            </h2>

            <div className="flex flex-wrap justify-center gap-4">
                {breeds.map((breed, i) => (
                    <span
                        key={i}
                        className="px-5 py-2 bg-green-100 text-green-700 rounded-full"
                    >
                        {breed}
                    </span>
                ))}
            </div>

        </section>
    );
};

export default TopBreeds;