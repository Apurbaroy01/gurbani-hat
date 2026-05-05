import { getTask } from '@/components/lib/data';
import AnimalCard from '@/components/ui/AnimalCard';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const AnimalsPage = async () => {
    const tasks = await getTask();
    return (
        <div>
            <section className="py-16 max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-10">
                    Featured Animals
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {tasks.map((animal) => (
                        <AnimalCard key={animal.id} animal={animal} />
                    ))}
                </div>
                <div className="w-full flex justify-center mt-10">
                    <Link href="/animals" className="inline-block">
                        <button className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-medium rounded-xl shadow-md hover:bg-green-700 hover:shadow-lg transition-all duration-300">
                            View All Animals
                            <FaArrowRight className="text-sm" />
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default AnimalsPage;