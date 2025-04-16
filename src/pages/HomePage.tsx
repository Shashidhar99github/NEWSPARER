import React from 'react';
import ArticleCard from '../components/ArticleCard';
import TrendingSidebar from '../components/TrendingSidebar';

const HomePage: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-3">
        <ArticleCard
          featured
          title="Technology Revolution Reshapes Modern Workplace"
          excerpt="In a groundbreaking shift that mirrors the industrial revolution, artificial intelligence and virtual reality are transforming traditional office environments into dynamic digital workspaces. Major tech companies lead the charge in implementing hybrid work solutions that blend physical and virtual environments."
          date="April 8, 2025"
          author="Dr. Emily Chen"
          category="Technology"
          slug="tech-revolution"
          imageUrl="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="section-title">BREAKING NEWS</h3>
            <ArticleCard
              title="Global Summit Addresses Climate Concerns"
              excerpt="World leaders gather to discuss immediate actions needed to combat rising global temperatures, with groundbreaking commitments from major industrial nations."
              date="April 8, 2025"
              author="Sarah Johnson"
              category="World"
              slug="climate-summit"
              imageUrl="https://images.unsplash.com/photo-1626544827763-d516dce335e2?auto=format&fit=crop&w=600&q=80"
            />
            <ArticleCard
              title="Economic Forecast Shows Promise"
              excerpt="Leading economists predict steady growth through the next quarter despite challenges, citing technological innovation and sustainable practices as key drivers."
              date="April 8, 2025"
              author="Michael Chen"
              category="Business"
              slug="economic-forecast"
              imageUrl="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=600&q=80"
            />
          </div>
          
          <div>
            <h3 className="section-title">EDITORIALS</h3>
            <ArticleCard
              title="The Future of Public Transportation"
              excerpt="As cities grow, we must rethink how we move people efficiently and sustainably. New technologies and innovative urban planning offer promising solutions."
              date="April 8, 2025"
              author="Emily Wilson"
              category="Opinion"
              slug="future-transportation"
              imageUrl="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=600&q=80"
            />
            <ArticleCard
              title="Education in the Digital Age"
              excerpt="How virtual classrooms and AI-powered personalized learning are revolutionizing education, creating new opportunities for students worldwide."
              date="April 8, 2025"
              author="David Thompson"
              category="Education"
              slug="digital-education"
              imageUrl="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80"
            />
          </div>
        </div>

        <div className="mt-8">
          <h3 className="section-title">FEATURED STORIES</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ArticleCard
              title="AI Ethics Board Makes Landmark Decision"
              excerpt="Global committee establishes groundbreaking guidelines for AI development and implementation in critical sectors."
              date="April 8, 2025"
              author="Dr. Sarah Chen"
              category="Technology"
              slug="ai-ethics"
              imageUrl="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80"
            />
            <ArticleCard
              title="Space Tourism Takes Off"
              excerpt="Commercial space flights become reality as first civilian mission successfully completes orbital journey."
              date="April 8, 2025"
              author="James Wilson"
              category="Science"
              slug="space-tourism"
              imageUrl="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80"
            />
            <ArticleCard
              title="Revolutionary Health Tech Breakthrough"
              excerpt="New wearable devices promise to transform preventive healthcare through advanced biosensors and AI analysis."
              date="April 8, 2025"
              author="Dr. Maria Rodriguez"
              category="Health"
              slug="health-tech"
              imageUrl="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80"
            />
          </div>
        </div>
      </div>

      <TrendingSidebar />
    </div>
  );
};

export default HomePage;