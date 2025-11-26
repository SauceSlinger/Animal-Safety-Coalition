import { useState } from 'react';
import { Heart } from 'lucide-react';

export function DonationForm() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(25);
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');

  const presetAmounts = [10, 25, 50, 100, 250];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = selectedAmount === null ? customAmount : selectedAmount;
    alert(`Thank you for your ${donationType} donation of $${amount}! This is a demo - no actual payment will be processed.`);
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <Heart className="w-12 h-12 text-red-600 mx-auto mb-4" />
        <h3 className="text-gray-900 mb-2">Make a Difference Today</h3>
        <p className="text-gray-600">Your donation helps protect endangered species and their habitats</p>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Donation Type */}
        <div className="mb-6">
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setDonationType('one-time')}
              className={`flex-1 py-3 px-4 rounded-lg border-2 transition-colors ${
                donationType === 'one-time'
                  ? 'border-green-600 bg-green-50 text-green-900'
                  : 'border-gray-300 text-gray-700 hover:border-gray-400'
              }`}
            >
              One-Time
            </button>
            <button
              type="button"
              onClick={() => setDonationType('monthly')}
              className={`flex-1 py-3 px-4 rounded-lg border-2 transition-colors ${
                donationType === 'monthly'
                  ? 'border-green-600 bg-green-50 text-green-900'
                  : 'border-gray-300 text-gray-700 hover:border-gray-400'
              }`}
            >
              Monthly
            </button>
          </div>
        </div>

        {/* Amount Selection */}
        <div className="mb-6">
          <label className="block text-gray-900 mb-3">Select Amount</label>
          <div className="grid grid-cols-5 gap-3 mb-3">
            {presetAmounts.map((amount) => (
              <button
                key={amount}
                type="button"
                onClick={() => {
                  setSelectedAmount(amount);
                  setCustomAmount('');
                }}
                className={`py-3 px-4 rounded-lg border-2 transition-colors ${
                  selectedAmount === amount
                    ? 'border-green-600 bg-green-50 text-green-900'
                    : 'border-gray-300 text-gray-700 hover:border-gray-400'
                }`}
              >
                ${amount}
              </button>
            ))}
          </div>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
            <input
              type="number"
              placeholder="Custom amount"
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value);
                setSelectedAmount(null);
              }}
              className="w-full pl-8 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-600 focus:outline-none"
            />
          </div>
        </div>

        {/* Personal Info */}
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-gray-900 mb-2">Full Name</label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-600 focus:outline-none"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-gray-900 mb-2">Email</label>
            <input
              type="email"
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-600 focus:outline-none"
              placeholder="john@example.com"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-4 rounded-lg hover:bg-green-700 transition-colors"
        >
          Donate {selectedAmount === null ? customAmount && `$${customAmount}` : `$${selectedAmount}`} {donationType === 'monthly' ? 'Monthly' : 'Now'}
        </button>

        <p className="text-gray-500 text-center mt-4">
          This is a demo donation form. No actual payment will be processed.
        </p>
      </form>
    </div>
  );
}
