import React from 'react';

interface PortfolioItemProps {
  title: string;
  description: string;
  imageUrl: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="portfolio-item">
      <img src={imageUrl} alt={title} className="portfolio-item-image" />
      <h2 className="portfolio-item-title">{title}</h2>
      <p className="portfolio-item-description">{description}</p>
    </div>
  );
};

export default PortfolioItem;
