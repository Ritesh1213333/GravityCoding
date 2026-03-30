import React from 'react';
import { Outlet } from 'react-router-dom';
import { Bell, Search, User } from 'lucide-react';
import StudentSidebar from '../StudentSidebar/StudentSidebar';
import './StudentLayout.css';

const StudentLayout = () => {
  return (
    <div className="student-layout">
      <StudentSidebar />
      <main className="student-main-content">
        <header className="student-topbar">
          <div className="topbar-search">
            <Search size={18} className="search-icon" />
            <input type="text" placeholder="Search courses, lessons..." />
          </div>
          <div className="topbar-actions">
            <button className="topbar-btn">
              <Bell size={20} />
              <span className="notification-badge"></span>
            </button>
            <div className="topbar-user">
              <div className="user-info">
                <span className="user-name">Ritesh Singh</span>
                <span className="user-role">Student</span>
              </div>
              <div className="user-avatar">
                <User size={20} />
              </div>
            </div>
          </div>
        </header>
        <div className="student-content-wrapper">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default StudentLayout;
