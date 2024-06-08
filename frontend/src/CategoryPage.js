import React from 'react';
import './CategoryPage.css';

const CategoryPage = ({ title, description }) => {
    return (
        <div className="category-page">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default CategoryPage;
