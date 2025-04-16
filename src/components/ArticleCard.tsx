import React from 'react';
import { Link } from 'react-router-dom';

interface ArticleCardProps {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  slug: string;
  imageUrl?: string;
  featured?: boolean;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  excerpt,
  date,
  author,
  category,
  slug,
  imageUrl,
  featured = false
}) => {
  return (
    <article className={`article-card ${featured ? 'mb-12' : ''}`}>
      {imageUrl && (
        <img 
          src={imageUrl}
          alt={title}
          className="w-full h-[400px] object-cover mb-4 grayscale"
        />
      )}
      <div className="article-meta">
        {date} • By {author} • {category}
      </div>
      <h2 className={featured ? 'article-title mb-4' : 'font-bold text-xl mb-2'}>
        <Link to={`/article/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h2>
      <p className={`${featured ? 'article-excerpt' : 'text-sm'} mb-4`}>{excerpt}</p>
      <Link 
        to={`/article/${slug}`}
        className="vintage-button inline-block"
      >
        Read More
      </Link>
    </article>
  );
};

export default ArticleCard;