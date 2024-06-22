import React, { useEffect, useState } from 'react';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import CategoryCard from './Components/CategoryCard';
import CategoryPage from './Components/CategoryPage.js';
//import CategoryEndpointsPage from './CategoryEndpointsPage';
import Footer from './Components/Footer';
import './Styling/App.css';
import './Styling/Header.css';
import './Styling/SideBar.css';
import './Styling/CategoryCard.css';
import './Styling/Footer.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// export const categories = [
//     {
//         title: 'Sports', description: 'APIs that encompass various sports-related data...',
//         endpoints: [
//             { name: '/GetUsers', description: 'Data about football matches...', jsonData:`<h1>jsonnn</h1>` },
//             { name: '/GetTeams', description: 'Data about basketball games...',jsonData:`<h1>jsonnn 2222</h1>` }
//         ]
//     },
//     {
//         title: 'Finance', description: 'Finance APIs offer users diverse datasets and insights...',
//         endpoints: [
//             { name: '/GetSurges', description: 'Data about football matches...' },
//             { name: '/GetCompanies', description: 'Data about basketball games...' }
//         ]
//     },
//     {
//         title: 'Data', description: 'Data APIs provide access to a wide range of datasets...',
//         endpoints: [
//             { name: '/GetWeatherData', description: 'Data about football matches...' },
//             { name: '/GetSampleData', description: 'Data about basketball games...' }
//         ]
//     },
//     {
//         title: 'Entertainment', description: 'APIs for entertainment including movies, music, and games...',
//         endpoints: [
//             { name: '/GetMovies', description: 'Data about football matches...' },
//             { name: '/GetHits', description: 'Data about basketball games...' }
//         ]
//     },
//     {
//         title: 'Travel', description: 'Travel APIs for booking, information, and reviews...',
//         endpoints: [
//             { name: '/GetFlights', description: 'Data about football matches...' },
//             { name: '/GetReviews', description: 'Data about basketball games...' }
//         ]
//     },
//     {
//         title: 'Location', description: 'Location-based APIs for maps and geolocation services...',
//         endpoints: [
//             { name: '/GetStreetNames', description: 'Data about football matches...' },
//             { name: '/GetSpeedL<imits', description: 'Data about basketball games...' }
//         ]
//     },
//     {
//         title: 'Science', description: 'APIs providing scientific data and services...',
//         endpoints: [
//             { name: '/GetUsers', description: 'Data about football matches...' },
//             { name: '/GetTeams', description: 'Data about basketball games...' }
//         ]
//     },
//     {
//         title: 'Food', description: 'APIs for food-related information, recipes, and nutrition...',
//         endpoints: [
//             { name: '/GetUsers', description: 'Data about football matches...' },
//             { name: '/GetTeams', description: 'Data about basketball games...' }
//         ]
//     },
//     {
//         title: 'Tools', description: 'APIs offering various tools and utilities...',
//         endpoints: [
//             { name: '/GetUsers', description: 'Data about football matches...' },
//             { name: '/GetTeams', description: 'Data about basketball games...' }
//         ]
//     },
//     {
//         title: 'Text Analysis', description: 'APIs for text analysis and natural language processing...',
//         endpoints: [
//             { name: '/GetUsers', description: 'Data about football matches...' },
//             { name: '/GetTeams', description: 'Data about basketball games...' }
//         ]
//     },
//     {
//         title: 'Weather', description: 'APIs providing weather forecasts and data...',
//         endpoints: [
//             { name: '/GetUsers', description: 'Data about football matches...' },
//             { name: '/GetTeams', description: 'Data about basketball games...' }
//         ]
//     },
//     {
//         title: 'Gaming', description: 'APIs for game-related data and services...',
//         endpoints: [
//             { name: '/GetUsers', description: 'Data about football matches...' },
//             { name: '/GetTeams', description: 'Data about basketball games...' }
//         ]
//     },
//     {
//         title: 'SMS', description: 'APIs for sending and receiving SMS messages...',
//         endpoints: [
//             { name: '/GetUsers', description: 'Data about football matches...' },
//             { name: '/GetTeams', description: 'Data about basketball games...' }
//         ]
//     },
//     {
//         title: 'Events', description: 'APIs for event information and management...',
//         endpoints: [
//             { name: '/GetUsers', description: 'Data about football matches...' },
//             { name: '/GetTeams', description: 'Data about basketball games...' }
//         ]
//     },
//     {
//         title: 'Health and Fitness', description: 'APIs for health and fitness data...',
//         endpoints: [
//             { name: '/GetUsers', description: 'Data about football matches...' },
//             { name: '/GetTeams', description: 'Data about basketball games...' }
//         ]
//     },
//     {
//         title: 'Payments', description: 'APIs for handling digital payments and transactions...',
//         endpoints: [
//             { name: '/GetUsers', description: 'Data about football matches...' },
//             { name: '/GetTeams', description: 'Data about basketball games...' }
//         ]
//     }
// ];
const App = () => {
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
    
    const location = useLocation();
   
    const getEndpointsForCurrentCategory = () => {
        const currentCategory = categories.find(category => location.pathname.includes(category.title.toLowerCase().replace(/ /g, '-')));
        return currentCategory ? currentCategory.endpoints.map(endpoint => endpoint.name) : [];
    };

    return (
        <div className="app">
            <Header />
            <div className="main-container">
            {location.pathname === '/' ? (
                    <Sidebar isHomePage={true} links={categories} />
                ) : (
                    <Sidebar isHomePage={true} links={getEndpointsForCurrentCategory()} />
                )}
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
    );
};



export default App;
