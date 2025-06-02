import React from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Page = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-4 md:p-8">
      <div className="relative max-w-7xl mx-auto">
        {/* Navigation Arrows */}
        <button className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors">
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Movie Poster */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="aspect-[2/3] bg-slate-800 rounded-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/8263321/pexels-photo-8263321.jpeg"
                alt="Movie Poster"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Movie Details */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <h1 className="text-4xl font-bold">Sinners</h1>
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
                <span className="text-lg">8.2</span>
              </div>
              <span className="px-2 py-1 rounded bg-slate-800 text-sm">HD</span>
            </div>

            <p className="text-lg text-slate-300 mb-6">
              Trying to leave their troubled lives behind, twin brothers return to their hometown to
              start again, only to discover that an even greater evil is waiting to welcome them back.
            </p>

            <button className="flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 transition-colors rounded-lg text-lg font-medium">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path d="M8 5v14l11-7z" fill="currentColor" />
              </svg>
              Watch now
            </button>
          </div>
        </div>

        {/* Trending Section */}
        <div className="mt-16">
          <div className="flex items-center gap-8 mb-6">
            <h2 className="text-2xl font-bold">Trending</h2>
            <div className="flex gap-4">
              <button className="text-cyan-500 hover:text-cyan-400 transition-colors">Movies</button>
              <button className="text-slate-400 hover:text-slate-300 transition-colors">TV Shows</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;