import React from 'react';
import '../menu.scss';

export const MenuItem = ({ section }) => (
    <div className={`${section.size} menu-item`} style={{backgroundImage:`url(${section.imageUrl})`}} >
        
        <div className="menu-card">
            <h1 className="title"> {section.title.toUpperCase()} </h1>
            <span className="subtitle"> Shop now!!</span>
        </div>
    </div>
);