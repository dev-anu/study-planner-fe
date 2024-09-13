import React from 'react';
import { useNavigate,Link } from 'react-router-dom';

const Sidebar = ({isOpen,setIsOpen}:any) => {
  const navigate = useNavigate();


  const toggleSidebar = (): void => {
    setIsOpen(!isOpen);
  };

  const handleLogout=()=>{
    localStorage.clear();
    navigate('/');
  }

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="toggle-button" onClick={toggleSidebar}>
        {isOpen ? 'Close' : 'Open'} Menu
      </button>
      <ul className="menu">
        <li className="menu-item" onClick={()=> setIsOpen(false)}>
            <Link to="/dashboard">Dashboard</Link></li>
        <li className="menu-item" onClick={()=> setIsOpen(false)}><Link to="/projects">Projects</Link></li>
        <li className="menu-item" onClick={handleLogout}>Logout</li>
      </ul>
    </div>
  );
};

export default Sidebar;
