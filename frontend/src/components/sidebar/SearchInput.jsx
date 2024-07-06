import React, { useState } from 'react'
import { IoSearchSharp } from 'react-icons/io5';
import useConversation from '../../zustand/useConversation';
import useGetConversations from '../../hooks/useGetConversations';
import toast from 'react-hot-toast';
    const SearchInput = () => {
      const [search,setSearch] = useState()
      const {setSelectedConversation}= useConversation()
      const {conversations} = useGetConversations()
      const handleSubmit = async (e) =>{
        e.preventDefault();
        if(!search)return;
        if(search.length < 3){
          return toast.error("search term must be greater than 3 character")
        }

        const conversation = conversations.find((c)=> c.fullName.toLowerCase().includes(search.toLowerCase()))
        if(conversation){
          setSelectedConversation(conversation);
          setSearch("")
        }else{
          toast.error("no such user found")
        }
      }
      return (
        <form className='pb-2 flex items-center gap-2'onSubmit={handleSubmit}>
 			<input type='text' placeholder='Search…' className='input bg-slate-300 px-2 h-8 rounded-full' 
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      />
 			<button type='submit' className='p-2 rounded-full  bg-slate-300'>
 				<IoSearchSharp className='w-6 h-5 outline-none' />
 			</button>
 		</form>
      )
    }
    
    export default SearchInput
    

    // starter code of this file

    // import React from 'react'
    // import { IoSearchSharp } from 'react-icons/io5';
    
    // const SearchInput = () => {
    //   return (
    //     <form className='flex items-center gap-2'>
 	// 		<input type='text' placeholder='Search…' className='input input-bordered rounded-full' />
 	// 		<button type='submit' className='btn btn-circle bg-sky-500 text-white'>
 	// 			<IoSearchSharp className='w-6 h-6 outline-none' />
 	// 		</button>
 	// 	</form>
    //   )
    // }
    
    // export default SearchInput
    