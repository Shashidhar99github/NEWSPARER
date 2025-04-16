import React from 'react';
import ArticleCard from '../components/ArticleCard';
import TrendingSidebar from '../components/TrendingSidebar';
import { Cpu } from 'lucide-react';

const TechnologyPage: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-3">
        <div className="flex items-center gap-2 mb-8">
          <Cpu className="w-8 h-8" />
          <h1 className="text-4xl font-bold">TECHNOLOGY</h1>
        </div>

        <ArticleCard
          featured
          title="Revolutionary AI Breakthrough Changes Everything"
          excerpt="Scientists unveil groundbreaking artificial intelligence system capable of human-level reasoning across multiple domains, marking a historic milestone in computing history."
          date="April 8, 2025"
          author="Dr. Sarah Chen"
          category="Technology"
          slug="ai-breakthrough"
          imageUrl="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="section-title">ARTIFICIAL INTELLIGENCE</h3>
            <ArticleCard
              title="AI Ethics Board Makes Landmark Decision"
              excerpt="Global committee establishes groundbreaking guidelines for AI development..."
              date="April 8, 2025"
              author="Michael Chang"
              category="Technology"
              slug="ai-ethics"
              imageUrl="https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=600&q=80"
            />
            <ArticleCard
              title="Neural Networks Revolutionize Healthcare"
              excerpt="New AI system achieves breakthrough in medical diagnosis accuracy..."
              date="April 8, 2025"
              author="Dr. Emily Wilson"
              category="Technology"
              slug="ai-healthcare"
            />
          </div>
          
          <div>
            <h3 className="section-title">QUANTUM COMPUTING</h3>
            <ArticleCard
              title="Quantum Computer Sets New Record"
              excerpt="Revolutionary quantum processor achieves unprecedented calculation speeds..."
              date="April 8, 2025"
              author="Dr. James Liu"
              category="Technology"
              slug="quantum-record"
              imageUrl="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=600&q=80"
            />
            <ArticleCard
              title="Quantum Internet Prototype Launches"
              excerpt="First successful test of quantum network spans multiple cities..."
              date="April 8, 2025"
              author="Lisa Chen"
              category="Technology"
              slug="quantum-internet"
            />
          </div>
        </div>

        <div className="mt-8">
          <h3 className="section-title">SPACE TECHNOLOGY</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ArticleCard
              title="Mars Colony Project Advances"
              excerpt="Revolutionary habitat design passes crucial testing phase..."
              date="April 8, 2025"
              author="Robert Martinez"
              category="Technology"
              slug="mars-colony"
              imageUrl="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80"
            />
            <ArticleCard
              title="Private Space Station Launches"
              excerpt="First commercial space habitat begins operations in low Earth orbit..."
              date="April 8, 2025"
              author="Sarah Johnson"
              category="Technology"
              slug="space-station"
            />
          </div>
        </div>
      </div>

      <TrendingSidebar />
    </div>
  );
};

export default TechnologyPage;