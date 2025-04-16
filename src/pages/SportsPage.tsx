import React from 'react';
import ArticleCard from '../components/ArticleCard';
import TrendingSidebar from '../components/TrendingSidebar';
import { Trophy } from 'lucide-react';

const SportsPage: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-3">
        <div className="flex items-center gap-2 mb-8">
          <Trophy className="w-8 h-8" />
          <h1 className="text-4xl font-bold">SPORTS NEWS</h1>
        </div>

        <ArticleCard
          featured
          title="Historic Victory in Championship Final"
          excerpt="In a thrilling match that kept fans on the edge of their seats, the underdogs emerged victorious after an intense overtime period, marking one of the most memorable championships in recent history."
          date="April 8, 2025"
          author="Mike Thompson"
          category="Sports"
          slug="championship-final"
          imageUrl="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="section-title">FOOTBALL</h3>
            <ArticleCard
              title="Star Quarterback Signs Record Deal"
              excerpt="League's top performer commits to long-term contract with historic franchise..."
              date="April 8, 2025"
              author="John Davis"
              category="Sports"
              slug="quarterback-deal"
              imageUrl="https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&w=600&q=80"
            />
            <ArticleCard
              title="Youth Academy Produces New Talent"
              excerpt="Local training program celebrates success as three graduates sign professional contracts..."
              date="April 8, 2025"
              author="Sarah Wilson"
              category="Sports"
              slug="youth-academy"
            />
          </div>
          
          <div>
            <h3 className="section-title">BASKETBALL</h3>
            <ArticleCard
              title="International Tournament Announces Expansion"
              excerpt="Global basketball competition adds new regions and increases prize pool..."
              date="April 8, 2025"
              author="Marcus Johnson"
              category="Sports"
              slug="basketball-expansion"
              imageUrl="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=600&q=80"
            />
            <ArticleCard
              title="League MVP Race Heats Up"
              excerpt="Multiple players make compelling cases for season's top individual honor..."
              date="April 8, 2025"
              author="Lisa Chen"
              category="Sports"
              slug="mvp-race"
            />
          </div>
        </div>

        <div className="mt-8">
          <h3 className="section-title">OLYMPIC SPORTS</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ArticleCard
              title="New World Record in Track Event"
              excerpt="Athlete breaks decades-old record in spectacular fashion at international meet..."
              date="April 8, 2025"
              author="James Wilson"
              category="Sports"
              slug="world-record"
              imageUrl="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=600&q=80"
            />
            <ArticleCard
              title="Olympic Committee Announces Host City"
              excerpt="Future games location revealed after extensive selection process..."
              date="April 8, 2025"
              author="Emma Roberts"
              category="Sports"
              slug="olympic-host"
            />
          </div>
        </div>
      </div>

      <TrendingSidebar />
    </div>
  );
};

export default SportsPage;