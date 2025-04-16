import React from 'react';
import ArticleCard from '../components/ArticleCard';
import TrendingSidebar from '../components/TrendingSidebar';

const WorldPage: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-3">
        <ArticleCard
          featured
          title="Global Climate Summit Reaches Historic Agreement"
          excerpt="In a landmark decision, world leaders have unanimously agreed to ambitious carbon reduction targets, marking a turning point in international climate action. The agreement, reached after intense negotiations, sets binding commitments for all participating nations."
          date="April 8, 2025"
          author="Elena Rodriguez"
          category="World"
          slug="climate-summit-agreement"
          imageUrl="https://images.unsplash.com/photo-1621799754526-a0d52c49fad5?auto=format&fit=crop&w=1200&q=80"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="section-title">EUROPE</h3>
            <ArticleCard
              title="EU Announces Revolutionary Transport Initiative"
              excerpt="European Union unveils comprehensive plan to connect major cities with high-speed rail network..."
              date="April 8, 2025"
              author="Hans Weber"
              category="World"
              slug="eu-transport-initiative"
              imageUrl="https://images.unsplash.com/photo-1581262177000-8139a463e531?auto=format&fit=crop&w=600&q=80"
            />
            <ArticleCard
              title="Mediterranean Cultural Festival Unites Nations"
              excerpt="Annual celebration brings together artists and performers from across the region..."
              date="April 8, 2025"
              author="Sofia Papas"
              category="World"
              slug="mediterranean-festival"
            />
          </div>
          
          <div>
            <h3 className="section-title">ASIA</h3>
            <ArticleCard
              title="Pacific Rim Economic Forum Addresses Trade"
              excerpt="Leaders discuss new trade agreements and economic cooperation in rapidly evolving markets..."
              date="April 8, 2025"
              author="Akiko Tanaka"
              category="World"
              slug="pacific-rim-forum"
              imageUrl="https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=600&q=80"
            />
            <ArticleCard
              title="Innovation Hub Opens in Singapore"
              excerpt="State-of-the-art facility aims to accelerate technological advancement in Southeast Asia..."
              date="April 8, 2025"
              author="Lee Ming"
              category="World"
              slug="singapore-innovation"
            />
          </div>
        </div>

        <div className="mt-8">
          <h3 className="section-title">AMERICAS</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ArticleCard
              title="Pan-American Highway Expansion Project"
              excerpt="Major infrastructure initiative to improve connectivity from Alaska to Argentina..."
              date="April 8, 2025"
              author="Carlos Mendoza"
              category="World"
              slug="pan-american-highway"
              imageUrl="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=600&q=80"
            />
            <ArticleCard
              title="Amazon Conservation Breakthrough"
              excerpt="New international agreement protects additional rainforest regions..."
              date="April 8, 2025"
              author="Maria Silva"
              category="World"
              slug="amazon-conservation"
            />
          </div>
        </div>
      </div>

      <TrendingSidebar />
    </div>
  );
};

export default WorldPage;