import { ImageWithFallback } from './figma/ImageWithFallback';

interface SpeciesCardProps {
  name: string;
  scientificName: string;
  status: string;
  population: string;
  image: string;
  location: string;
}

export function SpeciesCard({ name, scientificName, status, population, image, location }: SpeciesCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative h-64 overflow-hidden">
        <ImageWithFallback 
          src={image} 
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full">
          {status}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-gray-900 mb-1">{name}</h3>
        <p className="text-gray-600 italic mb-4">{scientificName}</p>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Population:</span>
            <span className="text-gray-900">{population}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Location:</span>
            <span className="text-gray-900">{location}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
