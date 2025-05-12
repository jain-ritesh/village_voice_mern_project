import axios from "axios";
import {  createContext, useEffect, useState } from "react";


export const UserContext = createContext();

export const UserProvider = ({children})=>{
  const [user, setUser] = useState({});
  const [suggestion, setSuggestion]= useState([]);
  const[contact, setContact] = useState([]);

  const fetchData = async()=>{
    try{

      // get user Data
      let userResponse = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/auth/user`);
      setUser(userResponse.data.data);
      
      // get suggetion data
      let suggestionResponse = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/auth/suggestion`);
      
      if(!suggestionResponse){
        console.log('Sugesstion Data is not comming!', suggestionResponse)
      }
      setSuggestion(suggestionResponse.data.data);

      // get Contact Data
      let contactResponse = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/auth/get-contact-data`);
      if(!contactResponse){
        console.log('Contat Response is not comming!');
      }
      setContact(contactResponse.data.data);

    }catch(error){
      console.log(error)
    }
  }

  // console.log('User Data',user)
  // console.log('Suggetion Data Data',suggestion)
  
  useEffect(()=>{
    fetchData();
    
  },[])
  
  
  return(
    <UserContext.Provider value={{user,suggestion, contact}}>
    {children}
  </UserContext.Provider>
)
}