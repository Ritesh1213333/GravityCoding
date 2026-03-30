import React from 'react';
import { BookOpen, Clock, Trophy, Star } from 'lucide-react';
import './StudentDashboard.css';

const StudentDashboard = () => {
  const stats = [
    { label: 'Enrolled Courses', value: '4', icon: BookOpen, color: '#3b82f6' },
    { label: 'Hours Learned', value: '28h', icon: Clock, color: '#10b981' },
    { label: 'Completed Lessons', value: '12', icon: Trophy, color: '#ff6b00' },
    { label: 'Achievements', value: '3', icon: Star, color: '#a855f7' },
  ];

  return (
    <div className="student-dashboard">
      <header className="dashboard-welcome">
        <div className="welcome-text">
          <h1>Welcome back, Ritesh! 👋</h1>
          <p>You've completed <strong>85%</strong> of your "Advanced React" course. Keep it up!</p>
        </div>
        <button className="continue-btn">Continue Learning</button>
      </header>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon" style={{ backgroundColor: `${stat.color}15`, color: stat.color }}>
              <stat.icon size={24} />
            </div>
            <div className="stat-info">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-sections">
        <section className="recent-activity">
          <div className="section-header">
            <h2>Recent Activity</h2>
            <button className="view-all">View All</button>
          </div>
          <div className="activity-list">
            <div className="activity-item">
              <div className="activity-dot"></div>
              <div className="activity-content">
                <p>Completed lesson <strong>"Introduction to Hooks"</strong></p>
                <span>2 hours ago</span>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-dot"></div>
              <div className="activity-content">
                <p>Enrolled in <strong>"Node.js Backend Mastery"</strong></p>
                <span>Yesterday</span>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-dot"></div>
              <div className="activity-content">
                <p>Earned <strong>"Fast Learner"</strong> badge</p>
                <span>2 days ago</span>
              </div>
            </div>
          </div>
        </section>

        <section className="upcoming-deadlines">
          <div className="section-header">
            <h2>Upcoming Deadlines</h2>
          </div>
          <div className="deadline-placeholder">
            <p>No upcoming deadlines. You're all caught up!</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StudentDashboard;
