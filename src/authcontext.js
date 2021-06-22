import React , { useContext, useState , useEffect } from 'react';
import {auth} from './firebase.js';

const AuthContext = React.createContext();

export function Useauth()
{
    return useContext(AuthContext);
}

export function Authprovider({children})
{
    const [currentuser, setcurrentuser] = useState();
    const [loading, setloading] = useState(true);

    function signup(email,password)
    {
        return auth.createUserWithEmailAndPassword(email,password);
    }

    function login(email, password)
    {
        return auth.signInWithEmailAndPassword(email,password);
    }

    function resetpassword(email)
    {
        return auth.sendPasswordResetEmail(email);
    }

    function logout()
    {
        return auth.signOut();
    }

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(user => {
            setcurrentuser(user);
            setloading(false);
        })
        return unsubscribe;
    },[])

    const value = {
        currentuser,
        login,
        signup,
        logout,
        resetpassword
    }

    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

