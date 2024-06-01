import React from 'react';

const CategoryCard = ({ title, description }) => {
    return (
        <div className="category-card">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>

    );
};

export default CategoryCard;
