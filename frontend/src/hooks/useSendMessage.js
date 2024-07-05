import React, { useState } from 'react'
import useConversation from '../zustand/useConversation';
import toast from 'react-hot-toast';

const useSendMessage = () => {
    const [loading,setLoading]= useState(false);
    const {messages,setMessages,selectedConversation} = useConversation();

    const sendMessage = async (message) =>{
        setLoading(true)
        try {
            // Optional data validation:
            if (!message || message.trim() === '') {
              throw new Error('Message content cannot be empty.');
            }
        
            const res = await fetch(`/api/messages/send/${selectedConversation._id}`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({message}),
            });

    
            const data = await res.json()

            if(data.error){
                throw new Error(data.error)
            }
            setMessages([...messages,data])
            
        } catch (error) {
            toast.error("hey"+error.message)
        }finally{
            setLoading(false)
        }
    }

  return {sendMessage,loading}
}

export default useSendMessage
