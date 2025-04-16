import React from 'react';
import ArticleCard from '../components/ArticleCard';
import TrendingSidebar from '../components/TrendingSidebar';

const PoliticsPage: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-3">
        <ArticleCard
          featured
          title="Landmark Bill Passes in Historic Senate Session"
          excerpt="In a decisive moment for national policy, the Senate has approved groundbreaking legislation addressing healthcare, climate change, and economic reform. The bipartisan effort marks a significant shift in political cooperation."
          date="April 8, 2025"
          author="Jonathan Pierce"
          category="Politics"
          slug="senate-bill-passes"
          imageUrl="https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=1200&q=80"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="section-title">NATIONAL POLITICS</h3>
            <ArticleCard
              title="Election Reform Package Unveiled"
              excerpt="New measures aim to modernize voting systems and increase accessibility..."
              date="April 8, 2025"
              author="Rachel Martinez"
              category="Politics"
              slug="election-reform"
              imageUrl="https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=600&q=80"
            />
            <ArticleCard
              title="Cabinet Reshuffle Signals Policy Shift"
              excerpt="Key appointments reflect administration's renewed focus on economic growth..."
              date="April 8, 2025"
              author="Marcus Johnson"
              category="Politics"
              slug="cabinet-reshuffle"
            />
          </div>
          
          <div>
            <h3 className="section-title">STATE & LOCAL</h3>
            <ArticleCard
              title="Governors Summit Addresses Infrastructure"
              excerpt="State leaders collaborate on comprehensive infrastructure development plan..."
              date="April 8, 2025"
              author="Diana Chen"
              category="Politics"
              slug="governors-summit"
              imageUrl="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
            />
            <ArticleCard
              title="City Council Launches Green Initiative"
              excerpt="Urban renewal project focuses on sustainability and community development..."
              date="April 8, 2025"
              author="Robert O'Brien"
              category="Politics"
              slug="green-initiative"
            />
          </div>
        </div>

        <div className="mt-8">
          <h3 className="section-title">INTERNATIONAL RELATIONS</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ArticleCard
              title="Diplomatic Breakthrough in Trade Talks"
              excerpt="Major economic powers reach agreement on new trade framework..."
              date="April 8, 2025"
              author="Sarah Wong"
              category="Politics"
              slug="trade-talks"
              imageUrl="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=600&q=80"
            />
            <ArticleCard
              title="UN Security Council Expansion Proposed"
              excerpt="Reform package suggests adding new permanent members..."
              date="April 8, 2025"
              author="James Mitchell"
              category="Politics"
              slug="un-council-expansion"
            />
          </div>
        </div>
      </div>

      <TrendingSidebar />
    </div>
  );
};

export default PoliticsPage;