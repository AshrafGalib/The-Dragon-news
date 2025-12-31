import React, { useEffect, useState } from 'react';
import { AuthContext } from '../Context/Context';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Services/Firebase/firebase.config';

const AuthProvider = ({children}) => {
 const provider = new GoogleAuthProvider();
   const[user,setUser]=useState(null)
   const[loading,setLoading]=useState(true)

    //createUser
    const createUser =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    //signInUser
    const SignInUser =( email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //sign out
    const signOutUser=()=>{
        setLoading(true)
        return signOut(auth)
    }

     //sign in with google
    const signInWithGoogle = ()=>{
        return signInWithPopup(auth, provider)
    }

    //Password Reset
    const passReset =(email)=>{
             return sendPasswordResetEmail(auth, email)
    }

    //User update profile
    const userUpdateProfile=(profile)=>{
        return updateProfile(auth.currentUser,profile)
    }

    //observer
    useEffect(()=>{
        const unSubscribe =onAuthStateChanged(auth,async(currentUser)=>{
         // console.log('current user',currentUser)
         
            if(currentUser){
                await currentUser.reload()
                 const isPasswordUser =
    currentUser.providerData[0]?.providerId === "password";
                if( isPasswordUser && !currentUser.emailVerified){
                   // console.log(user)
                    setUser(null)
                }
                else{
                   setUser(auth.currentUser) 
                  // console.log(user)
                }
            }
            else{
                setUser(null)
            }
            setLoading(false)
        })
        
        return()=>{
            unSubscribe()
        }
    },[])

    const userInfo={
        loading,
        setLoading,
        user,
        createUser,
        SignInUser,
        signOutUser,
        passReset,
        userUpdateProfile,
        signInWithGoogle
    }
    return (
<AuthContext.Provider value={userInfo}>
  {children}
</AuthContext.Provider>
    );
};

export default AuthProvider;