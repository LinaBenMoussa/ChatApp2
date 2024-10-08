import { useState, useEffect } from "react"
import toast from "react-hot-toast"

const useGetConversations = () => {
  const [loading,setLoading]=useState(false)
  const [conversations,setConversation]=useState([])
  useEffect(() =>{
    const getConversations=async()=>{
        setLoading(true)
        try {
            const res=await fetch(`/api/users`)
            const data=await res.json()
            console.log("conversation",data)
            if(data.error){
                throw new Error(data.error)
            }
            setConversation(data) 
        } catch (error) {
            toast.error(error.data)
        }finally{
            setLoading(false)
        }
    }
    getConversations()
  },[])
  return {loading,conversations}
}

export default useGetConversations