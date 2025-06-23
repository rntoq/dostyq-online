import React from 'react';
import './Breadcrumb.css';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ items = [] }) => (
  <nav className="breadcrumb-nav">
    <ol className="breadcrumb-list">
      {items.map((item, index) => (
        <li key={index} className="breadcrumb-item">
          {item.to && !item.active ? (
            <>
              <Link to={item.to}>{item.label}</Link>
              <span className="breadcrumb-separator">/</span>
            </>
          ) : (
            <span>{item.label}</span>
          )}
        </li>
      ))}
    </ol>
  </nav>
);

export default Breadcrumb; 