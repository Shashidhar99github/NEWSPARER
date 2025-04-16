import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Sun } from 'lucide-react';

const TrendingSidebar: React.FC = () => {
  return (
    <aside className="lg:col-span-1 border-l border-gray-300 pl-4">
      <div className="sticky top-4">
        <h3 className="section-title flex items-center gap-2">
          <TrendingUp className="w-5 h-5" />
          TRENDING NOW
        </h3>
        <ul className="space-y-4 mb-8">
          <li className="text-sm">
            <Link to="/article/stock-market" className="hover:underline">
              Stock Market Hits Record High
            </Link>
          </li>
          <li className="text-sm">
            <Link to="/article/healthcare-bill" className="hover:underline">
              New Healthcare Bill Proposed
            </Link>
          </li>
          <li className="text-sm">
            <Link to="/article/championship" className="hover:underline">
              Sports: Championship Finals Tonight
            </Link>
          </li>
          <li className="text-sm">
            <Link to="/article/awards-show" className="hover:underline">
              Entertainment: Awards Show Recap
            </Link>
          </li>
        </ul>

        <div className="bg-gray-100 p-4 mb-8">
          <h4 className="font-bold flex items-center gap-2 mb-2">
            <Sun className="w-4 h-4" />
            WEATHER
          </h4>
          <p className="text-sm">New York: 72°F, Partly Cloudy</p>
          <p className="text-sm">London: 18°C, Rain</p>
          <p className="text-sm">Tokyo: 25°C, Clear</p>
        </div>

        <div className="border-2 border-gray-900 p-4 text-center">
          <h4 className="font-bold mb-2">CLASSIFIED ADS</h4>
          <p className="text-sm italic mb-2">Place Your Ad Here!</p>
          <Link to="/classifieds" className="vintage-button text-sm inline-block">
            Contact Us
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default TrendingSidebar;