import React, { useState } from 'react';

// Example destination data
const destinationsData = [
  { id: 1, name: 'Paris', location: 'France', image: 'bg3.webp', estimatedCost: '$500', liked: false },
  { id: 2, name: 'New York', location: 'USA', image: 'bg3.webp', estimatedCost: '$400', liked: false },
  { id: 3, name: 'Tokyo', location: 'Japan', image: 'bg3.webp', estimatedCost: '$600', liked: false },
  { id: 4, name: 'Dubai', location: 'UAE', image: 'bg3.webp', estimatedCost: '$450', liked: false },
  { id: 5, name: 'London', location: 'UK', image: 'bg3.webp', estimatedCost: '$350', liked: false },
  { id: 6, name: 'Barcelona', location: 'Spain', image: 'bg3.webp', estimatedCost: '$300', liked: false },
];

const TopDestination = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // Mock login state

  return (
    <div className="p-6">
      {/* Places Near Me Segment */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Places Near Me</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {destinationsData.slice(0, 3).map(dest => (
            <div key={dest.id} className="relative group">
              <div
                className="w-full h-64 bg-cover bg-center rounded-lg"
                style={{ backgroundImage: `url(${dest.image})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white text-center">
                    <h3 className="text-lg font-bold">{dest.name}</h3>
                    <p>{dest.location}</p>
                    {isLoggedIn && <button className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-md">See Details</button>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Explore More Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Explore More</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {destinationsData.map(dest => (
            <div key={dest.id} className="relative group">
              <div
                className="w-full h-64 bg-cover bg-center rounded-lg"
                style={{ backgroundImage: `url(${dest.image})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white text-center">
                    <h3 className="text-lg font-bold">{dest.name}</h3>
                    <p>{dest.location}</p>
                    <p className="mt-2">Estimated Cost: {dest.estimatedCost}</p>
                    {isLoggedIn && <button className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-md">See Details</button>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopDestination;
