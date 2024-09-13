
import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword,  GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.init";
import useAxiosPublic from "../Hook/useAxiosPublic";

export  const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [userInfo, setuserInfo] = useState({});
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();
   
    const googleProvider = new GoogleAuthProvider();

    const handleRegister = (email, password) =>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth, email, password);
        
    }
    const handleSignIn = (email, password) =>{
        setLoading(true);
       return signInWithEmailAndPassword(auth, email, password);
    }
    const googleLogIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }
    const updateUserProfile = (name, photo) =>{
       return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
      });
    }

    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, (user) =>{
            setuserInfo(user);
            if(user){
                const info = {email: user.email};
                axiosPublic.post('/jwt', info)
                .then(res => {
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token)
                    }
                })
            }
            else{
                localStorage.removeItem('access-token')
            }
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const info = {
        handleRegister,
        logOut, 
        handleSignIn, 
        userInfo, 
        loading,
        googleLogIn,
        updateUserProfile
    } 

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;