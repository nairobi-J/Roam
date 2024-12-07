import React, { useState } from 'react';

// Pseudo Data
const hotelsData = [
    { id: 1, name: 'Hotel Sunshine', category: '3*', image: 'bg.webp', location: 'Paris', roomType: 'Deluxe', price: '$100', liked: false },
    { id: 2, name: 'Grand Palace', category: '5*', image: 'bg.webp', location: 'London', roomType: 'Suite', price: '$300', liked: false },
    { id: 3, name: 'Luxury Resort', category: '7*', image: 'bg.webp', location: 'Dubai', roomType: 'Presidential Suite', price: '$500', liked: false },
    { id: 4, name: 'Budget Inn', category: '3*', image: 'bg.webp', location: 'New York', roomType: 'Standard', price: '$80', liked: false },
    { id: 5, name: 'Ocean View Hotel', category: '5*', image: 'bg.webp', location: 'Miami', roomType: 'Ocean Suite', price: '$350', liked: false },
    { id: 6, name: 'Royal Palace Hotel', category: '7*', image: 'bg.webp', location: 'Tokyo', roomType: 'Royal Suite', price: '$600', liked: false },
    { id: 7, name: 'Mountain Escape', category: '3*', image: 'bg.webp', location: 'Switzerland', roomType: 'Mountain View', price: '$120', liked: false },
    { id: 8, name: 'Seaside Resort', category: '5*', image: 'bg.webp', location: 'Barcelona', roomType: 'Luxury Suite', price: '$400', liked: false },
    { id: 9, name: 'Majestic Heights', category: '7*', image: 'bg.webp', location: 'Singapore', roomType: 'Skyline Suite', price: '$700', liked: false },
    { id: 10, name: 'City Comfort Inn', category: '3*', image: 'bg.webp', location: 'Berlin', roomType: 'Economy', price: '$90', liked: false },
    { id: 11, name: 'The Hilton', category: '5*', image: 'bg.webp', location: 'Los Angeles', roomType: 'Presidential Suite', price: '$500', liked: false },
    { id: 12, name: 'Golden Sands Resort', category: '7*', image: 'bg.webp', location: 'Maldives', roomType: 'Private Villa', price: '$800', liked: false },
    { id: 13, name: 'Coastal Retreat', category: '3*', image: 'bg.webp', location: 'California', roomType: 'Ocean Breeze', price: '$130', liked: false },
    { id: 14, name: 'Sunset Villa', category: '5*', image: 'bg.webp', location: 'Hawaii', roomType: 'Beachfront Suite', price: '$450', liked: false },
    { id: 15, name: 'Emerald City Hotel', category: '7*', image: 'bg.webp', location: 'Hong Kong', roomType: 'Royal Suite', price: '$600', liked: false },
    { id: 16, name: 'Blue Sky Inn', category: '3*', image: 'bg.webp', location: 'Denver', roomType: 'Mountain View', price: '$110', liked: false },
    { id: 17, name: 'Palace of Dreams', category: '5*', image: 'bg.webp', location: 'Paris', roomType: 'Luxury Room', price: '$380', liked: false },
    { id: 18, name: 'Skyline Resort', category: '7*', image: 'bg.webp', location: 'Dubai', roomType: 'Penthouse Suite', price: '$750', liked: false },
    { id: 19, name: 'Sunny Days Inn', category: '3*', image: 'bg.webp', location: 'Sydney', roomType: 'Standard Room', price: '$90', liked: false },
    { id: 20, name: 'Grand Oasis', category: '5*', image: 'bg.webp', location: 'Cairo', roomType: 'Poolside Villa', price: '$400', liked: false },
    { id: 21, name: 'Imperial View Hotel', category: '7*', image: 'bg.webp', location: 'Seoul', roomType: 'Presidential Villa', price: '$850', liked: false },
    { id: 22, name: 'Cozy Cabin', category: '3*', image: 'bg.webp', location: 'Canada', roomType: 'Cabin', price: '$150', liked: false },
    { id: 23, name: 'Eagle Heights Resort', category: '5*', image: 'bg.webp', location: 'Aspen', roomType: 'Luxury Suite', price: '$500', liked: false },
    { id: 24, name: 'Royal Grand Hotel', category: '7*', image: 'bg.webp', location: 'London', roomType: 'King Suite', price: '$950', liked: false },
    { id: 25, name: 'Luxury Retreat', category: '3*', image: 'bg.webp', location: 'Las Vegas', roomType: 'Premium', price: '$140', liked: false },
    { id: 26, name: 'The Grand Tower', category: '5*', image: 'bg.webp', location: 'New York', roomType: 'City View Suite', price: '$400', liked: false },
    { id: 27, name: 'Lavish Living Hotel', category: '7*', image: 'bg.webp', location: 'Paris', roomType: 'Luxury Penthouse', price: '$700', liked: false },
    { id: 28, name: 'Mountain Peak Resort', category: '3*', image: 'bg.webp', location: 'Switzerland', roomType: 'Chalet', price: '$130', liked: false },
    { id: 29, name: 'Platinum Hotel', category: '5*', image: 'bg.webp', location: 'Rome', roomType: 'Master Suite', price: '$500', liked: false },
    { id: 30, name: 'Seven Stars Luxury', category: '7*', image: 'bg.webp', location: 'Tokyo', roomType: 'Luxury Suite', price: '$850', liked: false },
    { id: 31, name: 'Starlight Inn', category: '3*', image: 'bg.webp', location: 'Berlin', roomType: 'Economy Room', price: '$95', liked: false },
    { id: 32, name: 'Heavenly Heights', category: '5*', image: 'bg.webp', location: 'Dubai', roomType: 'Ocean View Suite', price: '$450', liked: false },
    { id: 33, name: 'Ocean Breeze Resort', category: '7*', image: 'bg.webp', location: 'Maldives', roomType: 'Overwater Villa', price: '$800', liked: false },
    { id: 34, name: 'Sapphire Bay Hotel', category: '3*', image: 'bg.webp', location: 'Sydney', roomType: 'Sea View', price: '$120', liked: false },
    { id: 35, name: 'Crystal Palace', category: '5*', image: 'bg.webp', location: 'London', roomType: 'Garden Suite', price: '$460', liked: false },
    { id: 36, name: 'Infinity Hotel', category: '7*', image: 'bg.webp', location: 'Las Vegas', roomType: 'Sky Suite', price: '$950', liked: false }
  ];
  

const HotelGrid = ({ hotels, onLike, onBook }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {hotels.map(hotel => (
        <div key={hotel.id} className="border p-4 rounded-lg shadow-lg">
          <img src={hotel.image} alt={hotel.name} className="w-full h-40 object-cover rounded-md" />
          <h3 className="text-xl font-semibold mt-2">{hotel.name}</h3>
          <p>{hotel.location}</p>
          <p>{hotel.roomType}</p>
          <p className="text-green-500">{hotel.price}</p>
          <div className="flex space-x-2 mt-2">
            <button
              className={`px-4 py-2 bg-gray-200 rounded ${hotel.liked ? 'bg-red-500 text-white' : 'bg-gray-200'}`}
              onClick={() => onLike(hotel.id)}
            >
              {hotel.liked ? 'Unlike' : 'Like'}
            </button>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded"
              onClick={() => onBook(hotel.id)}
            >
              Book
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

const Hotels = () => {
  const [hotels, setHotels] = useState(hotelsData);
  const [likedHotels, setLikedHotels] = useState([]);

  // Handle like button click
  const handleLike = (id) => {
    setHotels(prevHotels =>
      prevHotels.map(hotel =>
        hotel.id === id ? { ...hotel, liked: !hotel.liked } : hotel
      )
    );

    const hotel = hotels.find(hotel => hotel.id === id);
    if (!hotel.liked) {
      setLikedHotels(prevLiked => [...prevLiked, hotel]);
    } else {
      setLikedHotels(prevLiked => prevLiked.filter(hotel => hotel.id !== id));
    }
  };

  // Handle book button click (for demo, log hotel to console)
  const handleBook = (id) => {
    const hotel = hotels.find(hotel => hotel.id === id);
    console.log(`Booking hotel: ${hotel.name}`);
  };

  // Filter hotels by category
  const categories = ['3*', '5*', '7*'];
  const [selectedCategory, setSelectedCategory] = useState('3*');

  const filteredHotels = hotels.filter(hotel => hotel.category === selectedCategory);

  return (
    <div className="container mx-auto p-4 bg-white w-screen ">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold">Liked Hotels</h2>
        <div className="flex flex-wrap justify-center mt-4">
          {likedHotels.map(hotel => (
            <div key={hotel.id} className="mr-4 mb-4">
              <span className="bg-blue-500 text-white p-2 rounded">{hotel.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mb-4 bg-slate-50 text-black">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 mr-4 rounded ${selectedCategory === category ? 'bg-blue-200 text-black' : 'bg-white text-black'}`}
          >
            {category}
          </button>
        ))}
      </div>

      <HotelGrid hotels={filteredHotels} onLike={handleLike} onBook={handleBook} />
    </div>
  );
};

export default Hotels;
