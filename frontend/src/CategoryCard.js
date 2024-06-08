import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryCard.css';

const CategoryCard = ({ title, description }) => {
    const linkPath = `/${title.toLowerCase().replace(/ /g, '-')}`;

    return (
        <Link to={linkPath} className="category-card">
            <h2>{title}</h2>
            <p>{description}</p>
        </Link>
    );
};

export default CategoryCard;
