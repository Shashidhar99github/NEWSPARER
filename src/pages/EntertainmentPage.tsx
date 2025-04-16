import React from 'react';
import ArticleCard from '../components/ArticleCard';
import TrendingSidebar from '../components/TrendingSidebar';
import { Film } from 'lucide-react';

const EntertainmentPage: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-3">
        <div className="flex items-center gap-2 mb-8">
          <Film className="w-8 h-8" />
          <h1 className="text-4xl font-bold">ENTERTAINMENT</h1>
        </div>

        <ArticleCard
          featured
          title="Groundbreaking Film Sweeps Award Season"
          excerpt="Independent production garners critical acclaim and multiple accolades, marking a shift in the industry's recognition of diverse storytelling and innovative filmmaking techniques."
          date="April 8, 2025"
          author="Rachel Adams"
          category="Entertainment"
          slug="film-awards"
          imageUrl="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="section-title">CINEMA</h3>
            <ArticleCard
              title="Summer Blockbuster Sets Box Office Record"
              excerpt="Highly anticipated sequel exceeds expectations with record-breaking opening weekend..."
              date="April 8, 2025"
              author="Michael Scott"
              category="Entertainment"
              slug="blockbuster-record"
              imageUrl="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=600&q=80"
            />
            <ArticleCard
              title="Legendary Director Announces Final Project"
              excerpt="Acclaimed filmmaker reveals details about upcoming farewell masterpiece..."
              date="April 8, 2025"
              author="Emily Chen"
              category="Entertainment"
              slug="director-finale"
            />
          </div>
          
          <div>
            <h3 className="section-title">MUSIC</h3>
            <ArticleCard
              title="Artist's Surprise Album Release"
              excerpt="Global superstar drops unexpected new album, featuring industry-changing collaborations..."
              date="April 8, 2025"
              author="James Wilson"
              category="Entertainment"
              slug="surprise-album"
              imageUrl="https://images.unsplash.com/photo-1511735111819-9a3f7709049c?auto=format&fit=crop&w=600&q=80"
            />
            <ArticleCard
              title="Music Festival Announces Lineup"
              excerpt="Annual event returns with groundbreaking roster of performers..."
              date="April 8, 2025"
              author="Sarah Thompson"
              category="Entertainment"
              slug="festival-lineup"
            />
          </div>
        </div>

        <div className="mt-8">
          <h3 className="section-title">TELEVISION</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ArticleCard
              title="Streaming Series Makes History"
              excerpt="Revolutionary show breaks viewing records and cultural barriers..."
              date="April 8, 2025"
              author="David Lee"
              category="Entertainment"
              slug="streaming-history"
              imageUrl="https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&w=600&q=80"
            />
            <ArticleCard
              title="Classic Show Gets Modern Reboot"
              excerpt="Beloved series returns with contemporary twist and original cast cameos..."
              date="April 8, 2025"
              author="Lisa Parker"
              category="Entertainment"
              slug="show-reboot"
            />
          </div>
        </div>
      </div>

      <TrendingSidebar />
    </div>
  );
};

export default EntertainmentPage;