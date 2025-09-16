import React, { useEffect, useState } from 'react';
import { getFavorites, toggleFavorite } from '../utils/favoriteUtils';

const Library = () => {
  const [favorites, setFavorites] = useState([]);
  const [menuOpenId, setMenuOpenId] = useState(null);

  useEffect(() => {
    const favs = getFavorites();
    setFavorites(favs);
  }, []);

  const handleRemove = (song) => {
    const updated = toggleFavorite(song);
    setFavorites(updated);
    setMenuOpenId(null);
  };

  return (
    <div className="p-6 min-h-screen bg-[#0e0e0e] text-white font-sans">
      <h2 className="text-3xl font-bold mb-8">🎧 Your Favorite Songs</h2>

      {favorites.length === 0 ? (
        <p className="text-gray-400">You haven’t liked any songs yet.</p>
      ) : (
        <div className="grid gap-4">
          {favorites.map((song) => (
            <div
              key={song.id}
              className="flex items-center justify-between bg-[#1a1a1a] hover:bg-[#292929] rounded-lg px-4 py-3 shadow transition duration-200 group"
            >
              {/* Left: Cover + Title + Artist */}
              <div className="flex items-center gap-4">
                <img
                  src={song.cover || 'https://via.placeholder.com/50?text=🎵'}
                  alt={song.title}
                  className="w-14 h-14 rounded object-cover shadow-md"
                />
                <div>
                  <h4 className="text-lg font-semibold">{song.title}</h4>
                  <p className="text-sm text-gray-400">{song.artist}</p>
                </div>
              </div>

              {/* Right: Play + Menu */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => alert(`Playing: ${song.title}`)}
                  className="bg-green-600 hover:bg-green-700 px-4 py-1 rounded-full text-sm font-medium transition"
                  title="Play"
                >
                  ▶
                </button>

                <div className="relative">
                  <button
                    onClick={() =>
                      setMenuOpenId((prev) => (prev === song.id ? null : song.id))
                    }
                    className="text-xl text-gray-300 hover:text-white px-2"
                    title="Options"
                  >
                    ⋮
                  </button>

                  {menuOpenId === song.id && (
                    <div className="absolute right-0 mt-2 w-52 bg-[#2c2c2c] border border-gray-600 rounded-md shadow-lg z-50">
                      <button
                        onClick={() => handleRemove(song)}
                        className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-red-600 hover:text-white transition"
                      >
                        Remove from Favorites
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Library;
