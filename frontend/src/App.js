import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import CategoryCard from './CategoryCard';
import CategoryPage from './CategoryPage.js';
import Footer from './Footer';
import './App.css';
import './Header.css';
import './SideBar.css';
import './CategoryCard.css';
import './Footer.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
    const categories = [
        { title: 'Sports', description: 'APIs that encompass various sports-related data...' },
        { title: 'Finance', description: 'Finance APIs offer users diverse datasets and insights...' },
        { title: 'Data', description: 'Data APIs provide access to a wide range of datasets...' },
        { title: 'Entertainment', description: 'APIs for entertainment including movies, music, and games...' },
        { title: 'Travel', description: 'Travel APIs for booking, information, and reviews...' },
        { title: 'Location', description: 'Location-based APIs for maps and geolocation services...' },
        { title: 'Science', description: 'APIs providing scientific data and services...' },
        { title: 'Food', description: 'APIs for food-related information, recipes, and nutrition...' },
        { title: 'Tools', description: 'APIs offering various tools and utilities...' },
        { title: 'Text Analysis', description: 'APIs for text analysis and natural language processing...' },
        { title: 'Weather', description: 'APIs providing weather forecasts and data...' },
        { title: 'Gaming', description: 'APIs for game-related data and services...' },
        { title: 'SMS', description: 'APIs for sending and receiving SMS messages...' },
        { title: 'Events', description: 'APIs for event information and management...' },
        { title: 'Health and Fitness', description: 'APIs for health and fitness data...' },
        { title: 'Payments', description: 'APIs for handling digital payments and transactions...' }
    ];

    return (

        <Router>
            <div className="app">
                <Header />
                <div className="main-container">
                    <Sidebar links={categories.map(category => category.title)} />
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <section className="categories-grid">
                                    {categories.map((category, index) => (
                                        <CategoryCard
                                            key={index}
                                            title={category.title}
                                            description={category.description}
                                        />
                                    ))}
                                </section>
                            }
                        />
                        {categories.map((category, index) => (
                            <Route
                                key={index}
                                path={`/${category.title.toLowerCase().replace(/ /g, '-')}`}
                                element={<CategoryPage title={category.title} description={category.description} />}
                            />
                        ))}
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
       
    );
};



export default App;
