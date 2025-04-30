import React from "react";
import { games } from "@/data/game";
import { FaCalendar, FaDesktop, FaGamepad, FaStar } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";

const MainGamePage = ({ params }: { params: { slug: string[] } }) => {
  const { slug } = params;
  const [category, gameSlug] = slug;
  const game = games.find(
    (game) => game.category == category && game.slug == gameSlug
  );

  if (!game) {
    return <h1>Gme not found</h1>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Game banner */}
      <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
        <img
          className="w-full h-full object-cover"
          src={game.image}
          alt={game.title}
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white text-center">
            {game.title}
          </h1>
        </div>
      </div>
      {/* Game details */}
      <div className="mt-8 space-y-6">
        <p className="text-lg text-gray-600 leading-relaxed">{game.description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex items-center bg-gray-800 p-4 rounded-lg">
            <FaStar className="text-yellow-400 mr-2" />
            <span  className="text-yellow-400 mr-2" >Rating: {game.rating}/10</span>
          </div>
          <div className="flex items-center bg-gray-800 p-4 rounded-lg">
            <FaCalendarAlt className="text-yellow-400 mr-2" />
            <span  className="text-yellow-400 mr-2" >Release Date: {game.releaseDate}</span>
          </div>
          <div className="flex items-center bg-gray-800 p-4 rounded-lg">
            <FaGamepad className="text-gray-300 mr-2" />
            <span className="text-gray-300">Developer: {game.developer}</span>
          </div>
          <div className="flex items-center bg-gray-800 p-4 rounded-lg">
            <FaDesktop className="text-gray-300 mr-2" />
            <span className="text-gray-300">Platforms: {game.platforms.join(",")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainGamePage;
