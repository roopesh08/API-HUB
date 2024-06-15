const Sidebar = ({ links }) => {
    return (
    <aside className="sidebar">
    <ul>
    {links.map((link, index) => (
    <li key={index}><a href="#">{link}</a></li>
    ))}
    </ul>
    {/* <button className="toggle-button">Toggle Light/Dark Mode</button> */}
    </aside>
    );
    };
    
    export default Sidebar;