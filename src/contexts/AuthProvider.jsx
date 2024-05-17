import React, { createContext, useState,useEffect } from 'react'
import app from '../firebase/firebase.config';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
export const AuthContext=createContext();
const auth=getAuth();
const GoogleProvider=new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    //create user using gmail
    const signUpWithGmail=()=>{
        setLoading(true);
        return signInWithPopup(auth,GoogleProvider)
    }
    //login
    const login=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    //log out
    const logOut=()=>{
        return signOut(auth);
    }
    //user available
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () =>{
            unsubscribe();
        }
    }, [auth]); // Include auth in dependency array    
    const authInfo={
        user,
        loading,
        createUser,
        signUpWithGmail,
        login,
        logOut
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider