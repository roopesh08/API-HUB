import React from 'react';
import { Link } from 'react-router-dom';
import '../Styling/CategoryCard.css';

const CategoryCard = ({ title, description }) => {
    const linkPath = `/new/${title.replace(/ /g, '-')}`;

    return (
        <Link to={linkPath} className="category-card">
            <h2>{title}</h2>
            <p>{description}</p>
        </Link>
    );
};

export default CategoryCard;
