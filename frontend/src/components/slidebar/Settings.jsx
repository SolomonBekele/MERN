import React from 'react'
import { FaUserFriends } from 'react-icons/fa';
import { FiSettings, FiMessageSquare } from 'react-icons/fi';
const Settings = () => {
    return (

        <div>
            <ul className='text-black '>

                <li className='hover:bg-slate-50 ml-4'>
                    <button
                        className={`flex items-center p-2 rounded-md transition-colors duration-300 `}>
                        <FaUserFriends
                            className={`mr-2 '}`}
                        />
                        <span>Contacts</span>
                    </button>
                </li>
                <li>
                    <button className={`flex items-center p-2 rounded-md transition-colors duration-300`}>
                        <FiSettings className={`mr-2 `} />
                        <span>Settings</span>
                    </button>
                </li>
                <li><button

                    className={`flex items-center p-2 rounded-md transition-colors duration-300 `}
                >
                    <FiMessageSquare
                        className={`mr-2 `}
                    />
                    <span>Saved Messages</span>
                </button></li>
            </ul>
        </div>

    )
}

export default Settings
