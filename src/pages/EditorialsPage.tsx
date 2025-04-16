import React from 'react';
import ArticleCard from '../components/ArticleCard';
import { BookOpen, PenTool } from 'lucide-react';

const EditorialsPage: React.FC = () => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-8">
        <BookOpen className="w-8 h-8" />
        <h1 className="text-4xl font-bold">EDITORIALS & OPINION</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <ArticleCard
          featured
          title="The Future of Democracy in a Digital Age"
          excerpt="As technology reshapes our society, we must carefully consider its impact on democratic institutions and civic engagement. This comprehensive analysis explores the challenges and opportunities that lie ahead."
          date="April 8, 2025"
          author="Prof. Elizabeth Warren"
          category="Editorial"
          slug="democracy-digital-age"
          imageUrl="https://images.unsplash.com/photo-1577017040065-650ee4d43339?auto=format&fit=crop&w=1200&q=80"
        />

        <ArticleCard
          featured
          title="Rethinking Education: Beyond Traditional Classrooms"
          excerpt="The pandemic has forced us to reimagine education. Now is the time to embrace this opportunity for meaningful reform and innovation in how we teach and learn."
          date="April 8, 2025"
          author="Dr. James Mitchell"
          category="Editorial"
          slug="education-reform"
          imageUrl="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80"
        />
      </div>

      <div className="mb-12">
        <div className="flex items-center gap-2 mb-8">
          <PenTool className="w-6 h-6" />
          <h2 className="text-2xl font-bold">GUEST COLUMNISTS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ArticleCard
            title="The Economics of Sustainable Energy"
            excerpt="Analyzing the financial viability of renewable energy solutions..."
            date="April 8, 2025"
            author="Dr. Michael Bloomberg"
            category="Opinion"
            slug="sustainable-energy-economics"
            imageUrl="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=600&q=80"
          />
          
          <ArticleCard
            title="Urban Planning for the Next Century"
            excerpt="Cities must evolve to meet the challenges of population growth..."
            date="April 8, 2025"
            author="Sarah Chen"
            category="Opinion"
            slug="future-urban-planning"
            imageUrl="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=600&q=80"
          />
          
          <ArticleCard
            title="The Ethics of Artificial Intelligence"
            excerpt="Examining the moral implications of advanced AI systems..."
            date="April 8, 2025"
            author="Prof. Alan Turner"
            category="Opinion"
            slug="ai-ethics-future"
            imageUrl="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80"
          />
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-8">LETTERS TO THE EDITOR</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ArticleCard
            title="Response to 'Climate Change Policy'"
            excerpt="Reader perspectives on recent environmental legislation..."
            date="April 8, 2025"
            author="Various Contributors"
            category="Letters"
            slug="climate-policy-response"
          />
          
          <ArticleCard
            title="Debate: Public Transportation Future"
            excerpt="Community voices on urban transit development plans..."
            date="April 8, 2025"
            author="Various Contributors"
            category="Letters"
            slug="transit-debate"
          />
        </div>
      </div>
    </div>
  );
};

export default EditorialsPage;