// SideMenu.jsx
import React, { useRef, useEffect } from 'react';
import Profile from './Profile';

const SlideMenu = ({ isOpen, onClose }) => {
  const sideMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sideMenuRef.current && !sideMenuRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      ref={sideMenuRef}
      className={`absolute top-0 left-0 w-80 h-screen bg-slate-100 mt-0 shadow-lg z-10 transition-all duration-300 ease-in-out transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* Add your menu content here */}
      {/* <h1 className="text-white p-4">Menu</h1>
      <button
        className="text-white p-4 absolute top-0 right-0"
        onClick={onClose}
      >
        Close
      </button> */}
      <Profile/>
    </div>
  );
};

export default SlideMenu;