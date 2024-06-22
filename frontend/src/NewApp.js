import React from 'react';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import CategoryCard from './Components/CategoryCard';
import CategoryPage from './Components/CategoryPage';
import CategoryEndpointsPage from './Components/CategoryEndpointsPage'; // Import your CategoryEndpointsPage component
import Footer from './Components/Footer';
import './Styling/App.css';
import './Styling/Header.css';
import './Styling/SideBar.css';
import './Styling/CategoryCard.css';
import './Styling/Footer.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const NewApp = () => {
    const location = useLocation();
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await fetch('http://localhost:5000/api/data');  
              const responseData = await response.json();
              setCategories(responseData)
              console.log('responseData', responseData)
            } catch (error) {
              console.log('ERROR',error)
            }
          };
     fetchData()
    }, [])
    const [selectedEndpoint, setSelectedEndpoint] = useState({});

    const getEndpointsForCurrentCategory = () => {
        const currentCategory = categories.find(category => location.pathname.includes(category.title.toLowerCase().replace(/ /g, '-')));
        return currentCategory ? currentCategory.endpoints.map(endpoint => endpoint.name) : [];
    };

    return (
        <div className="app">
            <Header />
            <div className="main-container">
                <div>
                    {location.pathname.includes('new') ? (
                        <Sidebar setSelectedEndpoint={setSelectedEndpoint} isHomePage={false} links={categories} />
                    ) : (
                        <Sidebar isHomePage={false} links={getEndpointsForCurrentCategory()} />
                    )}
                </div>
                <div>
                    <Routes>
                        {categories.map((category, index) => (
                            <Route
                                key={index}
                                path={`${category.title.replace(/ /g, '-')}`}
                                element={<CategoryPage title={category.title} description={category.description} />}
                            />
                        ))}
                    </Routes>
                </div>

                {selectedEndpoint?.jsonData && <div className="category-page">
                    <h1>{`${selectedEndpoint?.name} Json`}</h1>
                    <p>{selectedEndpoint.jsonData}</p>
                </div>}
            </div>
            <Footer />
        </div>
    );
};

export default NewApp;
