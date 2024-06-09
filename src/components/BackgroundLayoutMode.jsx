import React, { useState, useEffect } from 'react';
import "./BackgroundLayout.css";
import "./Theme.css";

const BackgroundLayoutMode = () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  const [theme, setTheme] = useState(savedTheme);

  useEffect(() => {
    document.body.className = theme === 'light' ? 'light-theme' : 'dark-theme';
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  

  return (
    <div className='flex relative w-[100%] mt-4 justify-end'>
      <label
        htmlFor="theme"
        className="theme flex items-center decoration-transparent"
      
      >
        <span className="theme__toggle-wrap">
          <input
            id="theme"
            className="theme__toggle"
            type="checkbox"
            role="switch"
            name="theme"
            onChange={toggleTheme}
            checked={theme === 'dark'}
           
          />
          <span className="theme__fill transition-[0.3s]" />
          <span className="theme__icon transition-[0.3s]">
            <span className="theme__icon-part" />
            <span className="theme__icon-part" />
            <span className="theme__icon-part" />
            <span className="theme__icon-part" />
            <span className="theme__icon-part" />
            <span className="theme__icon-part" />
            <span className="theme__icon-part" />
            <span className="theme__icon-part" />
            <span className="theme__icon-part" />
          </span>
        </span>
      </label>
    </div>
  );
};

export default BackgroundLayoutMode;
