import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import CategoryCard from './CategoryCard';
import CategoryPage from './CategoryPage.js';
//import CategoryEndpointsPage from './CategoryEndpointsPage';
import Footer from './Footer';
import './App.css';
import './Header.css';
import './SideBar.css';
import './CategoryCard.css';
import './Footer.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
    const categories = [
        { title: 'Sports', description: 'APIs that encompass various sports-related data...' ,
            endpoints: [
                { name: '/GetUsers', description: 'Data about football matches...' },
                { name: '/GetTeams', description: 'Data about basketball games...' }
            ]
        },
        { title: 'Finance', description: 'Finance APIs offer users diverse datasets and insights...',
            endpoints: [
                { name: '/GetSurges', description: 'Data about football matches...' },
                { name: '/GetCompanies', description: 'Data about basketball games...' }
            ]
        },
        { title: 'Data', description: 'Data APIs provide access to a wide range of datasets...' ,
            endpoints: [
                { name: '/GetWeatherData', description: 'Data about football matches...' },
                { name: '/GetSampleData', description: 'Data about basketball games...' }
            ]
        },
        { title: 'Entertainment', description: 'APIs for entertainment including movies, music, and games...' ,
            endpoints: [
                { name: '/GetMovies', description: 'Data about football matches...' },
                { name: '/GetHits', description: 'Data about basketball games...' }
            ]
        },
        { title: 'Travel', description: 'Travel APIs for booking, information, and reviews...',
            endpoints: [
                { name: '/GetFlights', description: 'Data about football matches...' },
                { name: '/GetReviews', description: 'Data about basketball games...' }
            ]
        },
        { title: 'Location', description: 'Location-based APIs for maps and geolocation services...',
            endpoints: [
                { name: '/GetStreetNames', description: 'Data about football matches...' },
                { name: '/GetSpeedL<imits', description: 'Data about basketball games...' }
            ]
        },
        { title: 'Science', description: 'APIs providing scientific data and services...',
            endpoints: [
                { name: '/GetUsers', description: 'Data about football matches...' },
                { name: '/GetTeams', description: 'Data about basketball games...' }
            ]
        },
        { title: 'Food', description: 'APIs for food-related information, recipes, and nutrition...',
            endpoints: [
                { name: '/GetUsers', description: 'Data about football matches...' },
                { name: '/GetTeams', description: 'Data about basketball games...' }
            ]
        },
        { title: 'Tools', description: 'APIs offering various tools and utilities...',
            endpoints: [
                { name: '/GetUsers', description: 'Data about football matches...' },
                { name: '/GetTeams', description: 'Data about basketball games...' }
            ]
        },
        { title: 'Text Analysis', description: 'APIs for text analysis and natural language processing...',
            endpoints: [
                { name: '/GetUsers', description: 'Data about football matches...' },
                { name: '/GetTeams', description: 'Data about basketball games...' }
            ]
        },
        { title: 'Weather', description: 'APIs providing weather forecasts and data...',
            endpoints: [
                { name: '/GetUsers', description: 'Data about football matches...' },
                { name: '/GetTeams', description: 'Data about basketball games...' }
            ]
        },
        { title: 'Gaming', description: 'APIs for game-related data and services...',
            endpoints: [
                { name: '/GetUsers', description: 'Data about football matches...' },
                { name: '/GetTeams', description: 'Data about basketball games...' }
            ]
        },
        { title: 'SMS', description: 'APIs for sending and receiving SMS messages...',
            endpoints: [
                { name: '/GetUsers', description: 'Data about football matches...' },
                { name: '/GetTeams', description: 'Data about basketball games...' }
            ]
        },
        { title: 'Events', description: 'APIs for event information and management...',
            endpoints: [
                { name: '/GetUsers', description: 'Data about football matches...' },
                { name: '/GetTeams', description: 'Data about basketball games...' }
            ]
        },
        { title: 'Health and Fitness', description: 'APIs for health and fitness data...',
            endpoints: [
                { name: '/GetUsers', description: 'Data about football matches...' },
                { name: '/GetTeams', description: 'Data about basketball games...' }
            ]
        },
        { title: 'Payments', description: 'APIs for handling digital payments and transactions...',
            endpoints: [
                { name: '/GetUsers', description: 'Data about football matches...' },
                { name: '/GetTeams', description: 'Data about basketball games...' }
            ]
        }
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
