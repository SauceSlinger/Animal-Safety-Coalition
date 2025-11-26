import { SpeciesCard } from './components/species-card';
import { DonationForm } from './components/donation-form';
import { StatCard } from './components/stat-card';
import { Heart, Shield, Trees, Globe, ArrowDown } from 'lucide-react';

export default function App() {
  const endangeredSpecies = [
    {
      name: 'Bengal Tiger',
      scientificName: 'Panthera tigris tigris',
      status: 'Endangered',
      population: '~2,500',
      location: 'India, Bangladesh',
      image: 'https://images.unsplash.com/photo-1567022138889-ec78266cae0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmRhbmdlcmVkJTIwdGlnZXIlMjB3aWxkbGlmZXxlbnwxfHx8fDE3NjQwOTA4NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'African Elephant',
      scientificName: 'Loxodonta africana',
      status: 'Endangered',
      population: '~415,000',
      location: 'Sub-Saharan Africa',
      image: 'https://images.unsplash.com/photo-1634646297235-008cc35cb8d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVwaGFudCUyMGNvbnNlcnZhdGlvbnxlbnwxfHx8fDE3NjQxMjUyNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Giant Panda',
      scientificName: 'Ailuropoda melanoleuca',
      status: 'Vulnerable',
      population: '~1,800',
      location: 'Central China',
      image: 'https://images.unsplash.com/photo-1723444612558-a41b25c8e896?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYW5kYSUyMGVuZGFuZ2VyZWR8ZW58MXx8fHwxNzY0MDY4MTczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Mountain Gorilla',
      scientificName: 'Gorilla beringei beringei',
      status: 'Endangered',
      population: '~1,000',
      location: 'Central Africa',
      image: 'https://images.unsplash.com/photo-1557446125-1407c9264ff0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3JpbGxhJTIwd2lsZGxpZmV8ZW58MXx8fHwxNzY0MDc4Nzc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Sea Turtle',
      scientificName: 'Chelonioidea',
      status: 'Endangered',
      population: 'Various',
      location: 'Global Oceans',
      image: 'https://images.unsplash.com/photo-1549557143-90d216195a97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWElMjB0dXJ0bGUlMjBvY2VhbnxlbnwxfHx8fDE3NjQwODk2Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1626354338145-96a3f13c0e62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aWxkbGlmZSUyMGNvbnNlcnZhdGlvbiUyMG5hdHVyZXxlbnwxfHx8fDE3NjQxMjUyNjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
        }}
      >
        <div className="text-center text-white px-4 max-w-4xl">
          <h1 className="text-white mb-6">Protect Our Planet's Endangered Species</h1>
          <p className="mb-8 text-xl">
            Every species matters. Your support helps preserve wildlife and their habitats for future generations.
          </p>
          <a 
            href="#donate"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors"
          >
            Donate Now
            <ArrowDown className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-600 text-lg">
              We are dedicated to protecting endangered species around the world through conservation efforts, 
              habitat restoration, and community education. Together, we can prevent extinction and preserve 
              biodiversity for generations to come.
            </p>
          </div>
        </div>
      </div>

      {/* Impact Statistics */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center text-gray-900 mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <StatCard 
              icon={<Shield className="w-12 h-12" />}
              number="150+"
              label="Species Protected"
            />
            <StatCard 
              icon={<Trees className="w-12 h-12" />}
              number="2.5M"
              label="Acres Preserved"
            />
            <StatCard 
              icon={<Globe className="w-12 h-12" />}
              number="45"
              label="Countries"
            />
            <StatCard 
              icon={<Heart className="w-12 h-12" />}
              number="100K+"
              label="Supporters"
            />
          </div>
        </div>
      </div>

      {/* Endangered Species */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center text-gray-900 mb-4">Endangered Species We Protect</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            These magnificent creatures face extinction. Your donation directly supports conservation efforts 
            to protect them and their natural habitats.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {endangeredSpecies.map((species, index) => (
              <SpeciesCard key={index} {...species} />
            ))}
          </div>
        </div>
      </div>

      {/* Donation Section */}
      <div id="donate" className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <DonationForm />
        </div>
      </div>

      {/* Why Donate Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center text-gray-900 mb-12">Why Your Donation Matters</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-gray-900 mb-3">Direct Protection</h3>
              <p className="text-gray-600">
                Your funds go directly to anti-poaching patrols, wildlife rangers, and habitat protection programs.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trees className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-gray-900 mb-3">Habitat Restoration</h3>
              <p className="text-gray-600">
                We restore and preserve critical habitats, creating safe spaces for endangered species to thrive.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-gray-900 mb-3">Community Education</h3>
              <p className="text-gray-600">
                We educate local communities about conservation, creating sustainable solutions for coexistence.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <Heart className="w-12 h-12 text-green-500 mx-auto mb-4" />
          <h3 className="text-white mb-4">Wildlife Conservation Foundation</h3>
          <p className="text-gray-400 mb-6">
            Protecting endangered species and their habitats worldwide
          </p>
          <p className="text-gray-500">
            © 2025 Wildlife Conservation Foundation. This is a demonstration website.
          </p>
        </div>
      </footer>
    </div>
  );
}
