
import { createContext, useEffect, useState } from "react";


import {  GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "/Task/Task-manager-client/src/firbase.config";
// import axios from "axios";

export const AuthContext=createContext(null);
const googleProvider=new GoogleAuthProvider();
const auth=getAuth(app);

const AuthPro = ({children}) => {

    const [user,setUser]=useState(null)
    const[loading,setLoading]=useState(true)
  
    const createUser=(email,password)=>{
      
      setLoading(true)
      return createUserWithEmailAndPassword(auth,email,password)
    }
  
     const Googlesignin=()=>{
      setLoading(true);
        return signInWithPopup(auth,googleProvider);
     }
  
   const Signin=(email,password)=>{
      setLoading(true)
      return signInWithEmailAndPassword(auth,email,password)
   }
  
   const LogOut=()=>{
    setLoading(true);
     return signOut(auth);
   }
  
    useEffect(()=>{
   const unsub=onAuthStateChanged(auth,currentUser=>{
      
          setUser(currentUser);
          console.log(currentUser);
          setLoading(false)
      });
      return ()=>{
          return unsub();
      }
    },[])
  
     const authInfo={
     user,
     loading,
     createUser,
     Googlesignin,
     Signin,
     LogOut,
  
     }
  




    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthPro;