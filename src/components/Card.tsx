
import Image from "next/image";

interface CardProps {
  image: string;
  title: string;
  description: string;
}

export default function Card({ image, title, description }: CardProps) {
  return (
    <div className="bg-slate-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <div className="relative h-48">
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold font-poppins text-white mb-2">{title}</h3>
        <p className="text-gray-400 font-inter">{description}</p>
      </div>
    </div>
  );
}
