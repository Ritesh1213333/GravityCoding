import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BookOpen, 
  User, 
  Settings, 
  LogOut, 
  Home as HomeIcon,
  ChevronRight
} from 'lucide-react';
import './StudentSidebar.css';

const StudentSidebar = () => {
  const navItems = [
    { path: '/student/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/student/courses', label: 'My Courses', icon: BookOpen },
    { path: '/student/profile', label: 'Profile', icon: User },
    { path: '/student/settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside className="student-sidebar">
      <div className="sidebar-header">
        <div className="logo-container">
          <span className="logo-text">Gravity<span className="accent">Coding</span></span>
        </div>
      </div>

      <nav className="sidebar-nav">
        <ul>
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink 
                to={item.path} 
                className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
              >
                <item.icon className="nav-icon" size={20} />
                <span className="nav-label">{item.label}</span>
                {/* <ChevronRight className="active-arrow" size={16} /> */}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-footer">
        <NavLink to="/" className="nav-item back-home">
          <HomeIcon className="nav-icon" size={20} />
          <span className="nav-label">Back to Site</span>
        </NavLink>
        <button className="nav-item logout-btn">
          <LogOut className="nav-icon" size={20} />
          <span className="nav-label">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default StudentSidebar;
