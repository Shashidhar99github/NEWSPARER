import React from 'react';
import { Archive, Calendar, Search } from 'lucide-react';

const ArchivesPage: React.FC = () => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-8">
        <Archive className="w-8 h-8" />
        <h1 className="text-4xl font-bold">DIGITAL ARCHIVES</h1>
      </div>

      <div className="bg-white p-8 mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Search className="w-6 h-6" />
          <h2 className="text-2xl font-bold">SEARCH ARCHIVES</h2>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Search by keyword, author, or date..."
            className="flex-1 p-2 border-2 border-gray-900"
          />
          <button className="vintage-button">
            Search Archives
          </button>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="w-6 h-6" />
          <h2 className="text-2xl font-bold">BROWSE BY DATE</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[2025, 2024, 2023, 2022].map((year) => (
            <div key={year} className="border-2 border-gray-900 p-4">
              <h3 className="font-bold text-xl mb-2">{year}</h3>
              <ul className="space-y-1">
                <li><button className="hover:underline">January</button></li>
                <li><button className="hover:underline">February</button></li>
                <li><button className="hover:underline">March</button></li>
                <li><button className="hover:underline">April</button></li>
                {/* Add more months as needed */}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">FEATURED FROM THE ARCHIVES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="article-card">
            <div className="article-meta">January 15, 2024</div>
            <h3 className="font-bold text-xl mb-2">Historic Peace Agreement Signed</h3>
            <p className="text-sm mb-4">Looking back at the landmark treaty that changed international relations...</p>
            <button className="vintage-button">Read Article</button>
          </div>
          
          <div className="article-card">
            <div className="article-meta">March 3, 2024</div>
            <h3 className="font-bold text-xl mb-2">Technology Milestone Achieved</h3>
            <p className="text-sm mb-4">Revisiting the breakthrough that revolutionized computing...</p>
            <button className="vintage-button">Read Article</button>
          </div>
          
          <div className="article-card">
            <div className="article-meta">December 21, 2023</div>
            <h3 className="font-bold text-xl mb-2">Economic Reform Package Unveiled</h3>
            <p className="text-sm mb-4">Analysis of the policy changes that shaped our economy...</p>
            <button className="vintage-button">Read Article</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchivesPage;