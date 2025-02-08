// NewsCard.jsx
import React from 'react';
import './Newscard.css'; // Import your styles

const NewsCard = ({ article }) => {
  const { title, description, url, urlToImage } = article;

  return (
    <div className="news-card">
      <img src={urlToImage} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <a href={url} className="read-more" target="_blank" rel="noopener noreferrer">
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
