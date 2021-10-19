import initializeAuthentication from "../pages/Login/firebase/firebase.initialize"
import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [name, setName] = useState('');

    const auth = getAuth();

    // google sign in system
    const loginWithUseingGoogle = () => {

        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);

    };

    // keep carent login user
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
        })

    }, [])

    // manually login process
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }

    // manually registration system
    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // log out process
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }

    // set create users name
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
    }


    return {
        user,
        setUser,
        setName,
        error,
        setError,
        loginWithUseingGoogle,
        logOut,
        createNewUser,
        loginUser,
        setUserName
    }
}

export default useFirebase;