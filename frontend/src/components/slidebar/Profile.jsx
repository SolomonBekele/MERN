import React from 'react'
import { useAuthContext } from '../../context/AuthContext';
import Settings from './Settings';

const Profile = () => {
    const {authUser}=useAuthContext();
  return (
    <>
    <div  className='p-3 w-full h-28 bg-slate-400'>
      <img src={`${authUser.profilePic}`} alt="profile pic" className=' w-14 rounded full' />
      <span className='text-white'>{authUser.fullName}</span>
    </div>

   <Settings/>
    </>
  )
}

export default Profile
