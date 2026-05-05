import FeaturedAnimals from "@/components/home/FeaturedAnimals";
import Hero from "@/components/home/Hero";
import QurbaniTips from "@/components/home/QurbaniTips";
import TopBreeds from "@/components/home/TopBreeds";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedAnimals />
      <QurbaniTips />
      <TopBreeds />
    </main>
  );
}
