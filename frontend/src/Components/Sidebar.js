import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

const Sidebar = ({isHomePage, links,setSelectedEndpoint }) => {
    const location = useLocation();
    const selectedCategory = (links || []).filter(category=> location.pathname.includes(category.title));

    return (
    <aside className="sidebar">
    <ul>
    {isHomePage ? links.map((link, index) => (
         <Link to={`new/${link.title}`}>
         <h2>{link.title}</h2>
     </Link>
    )) : (selectedCategory[0]?.endpoints || []).map((subLink, index) => (
        <h2 onClick={()=> setSelectedEndpoint(subLink)}>{subLink.name}</h2>
   ))}
    </ul>
    <button className="toggle-button">Toggle Light/Dark Mode</button>

    </aside>
    );
    };
    // <li key={index}><a href="#">{link.title}</a></li>

    export default Sidebar;