import React from 'react';
import './CategoryEndpointsPage.css';

const CategoryEndpointsPage = ({ category }) => {
    return (
        <div className="category-endpoints-page">
            <h2>{category.title} Endpoints</h2>
            <p>{category.description}</p>
            <ul>
                {category.endpoints.map((endpoint, index) => (
                    <li key={index} className="endpoint">
                        <h3>{endpoint.name}</h3>
                        <p>{endpoint.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryEndpointsPage;
