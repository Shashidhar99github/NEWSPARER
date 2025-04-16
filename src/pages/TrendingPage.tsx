import React from 'react';
import ArticleCard from '../components/ArticleCard';
import { TrendingUp, BarChart2 } from 'lucide-react';

const TrendingPage: React.FC = () => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-8">
        <TrendingUp className="w-8 h-8" />
        <h1 className="text-4xl font-bold">TRENDING NOW</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ArticleCard
          title="Global Markets React to Tech Innovation"
          excerpt="Revolutionary AI breakthrough sends stocks soaring across sectors..."
          date="April 8, 2025"
          author="Michael Chen"
          category="Business"
          slug="markets-tech-reaction"
          imageUrl="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80"
        />
        
        <ArticleCard
          title="Environmental Policy Shift"
          excerpt="Nations unite in unprecedented climate action agreement..."
          date="April 8, 2025"
          author="Emma Wilson"
          category="Politics"
          slug="climate-policy"
          imageUrl="https://images.unsplash.com/photo-1620316716969-9e6d631cd225?auto=format&fit=crop&w=600&q=80"
        />
        
        <ArticleCard
          title="Sports Legend's Surprise Return"
          excerpt="Iconic athlete announces comeback after years of retirement..."
          date="April 8, 2025"
          author="James Thompson"
          category="Sports"
          slug="athlete-return"
          imageUrl="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=600&q=80"
        />
      </div>

      <div className="mt-12">
        <div className="flex items-center gap-2 mb-8">
          <BarChart2 className="w-8 h-8" />
          <h2 className="text-3xl font-bold">MOST READ THIS WEEK</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ArticleCard
            title="Healthcare Revolution Begins"
            excerpt="New treatment breakthrough promises to transform medical care..."
            date="April 7, 2025"
            author="Dr. Sarah Johnson"
            category="Health"
            slug="healthcare-revolution"
            imageUrl="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80"
          />
          
          <ArticleCard
            title="Entertainment Industry Disruption"
            excerpt="Streaming platforms announce groundbreaking content strategy..."
            date="April 7, 2025"
            author="David Miller"
            category="Entertainment"
            slug="streaming-disruption"
            imageUrl="https://images.unsplash.com/photo-1578022761797-b8636ac614f3?auto=format&fit=crop&w=600&q=80"
          />
          
          <ArticleCard
            title="Urban Planning Innovation"
            excerpt="Cities embrace revolutionary design approach for future growth..."
            date="April 7, 2025"
            author="Alexandra Park"
            category="Technology"
            slug="urban-innovation"
            imageUrl="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=600&q=80"
          />
        </div>
      </div>
    </div>
  );
};

export default TrendingPage;