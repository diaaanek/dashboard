import React from 'react';

const SideBar = () => {
  return (
    <aside className="sidenav">
      <div className="sidenav__close-icon">
        <i className="fas fa-times sidenav__brand-close"></i>
      </div>
      <div className="sidenav__list-title">  TRACKRR </div>
      <ul className="sidenav__list">
        <li className="sidenav__list-item">Overview</li>
        <li className="sidenav__list-item">Mailbox</li>
        <li className="sidenav__list-item">Applications</li>
        <li className="sidenav__list-item">Forms</li>
        <li className="sidenav__list-item">Course</li>
      </ul>
    </aside>
  )
};

export default SideBar;
