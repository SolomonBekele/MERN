import React, { useState, useEffect, useRef } from 'react';
import { FaBars } from 'react-icons/fa';
import { AuthContext, useAuthContext } from '../../context/AuthContext';
const HorizonatalBar = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const sidebarRef = useRef(null);
    const {authUser} =useAuthContext();
  
    const toggleSidebar = () => {
      setShowSidebar(!showSidebar);
    };
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
          setShowSidebar(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [sidebarRef]);
  
    return (
      <div >
        <button className="p-3 text-white" onClick={toggleSidebar}>
          <FaBars />
        </button>
        {showSidebar && (
          <>
            <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10 transition-opacity duration-300"></div>
            <div
              ref={sidebarRef}
              className="fixed top-0 left-0 w-80 h-full bg-white shadow-lg z-20 transition-transform duration-300 ease-in-out transform translate-x-0"
            >
              {/* Your sidebar content goes here */}
              <div className='bg-slate-500 '>
                <img className='w-16  pt-2 mx-4 rounded-full ' src={`${authUser.profilePic}`} alt="" />
               <h2 className="p-2 text-xl text-white ">{authUser.fullName}</h2>
              </div>
             
              <ul className=" text-black  " >
                <li className="p-2 hover:bg-sky-200">
                  <a href="#">contacts</a>
                </li>
                <li className="p-2 hover:bg-sky-200">
                  <a href="#">saved message</a>
                </li>
                <li className="p-2 hover:bg-sky-200">
                  <a href="#">setting</a>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    );
}

export default HorizonatalBar
