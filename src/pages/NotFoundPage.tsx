import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="text-center py-12">
      <AlertTriangle className="w-16 h-16 mx-auto mb-4" />
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-8">The page you're looking for has been moved, archived, or doesn't exist.</p>
      <Link to="/" className="vintage-button">
        Return to Homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;