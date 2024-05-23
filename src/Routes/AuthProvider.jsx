import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, GithubAuthProvider, onAuthStateChanged, signInWithPopup, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";


export const AuthContext = createContext(null); //1st step
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [darkMode, setDarkMode] = useState(false); // State for dark mode
    const axiosPublic = useAxiosPublic()

    const createUser = (email, password, photoURL, name) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                updateUserProfile(user, { photoURL, displayName: name });
            });
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const SignInWithGithub = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

  const updateUserProfile = (name, photo) =>{
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
    });
  }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            if(currentUser){
                // get token and store client
                const userInfo = {email: currentUser.email};
                axiosPublic.post('/jwt',userInfo )
                .then(res =>{
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token);
                    }
                })
            }
            else{
                // do something remove token (if token stored int he client side: lcoalStorage, cahing, in memory)
                localStorage.removeItem('access-token');
            }
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, [axiosPublic]);

    // Function to toggle dark mode
    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
    }

    const AuthInfo = {
        user,
        loading,
        createUser,
        signInWithGoogle,
        updateUserProfile,
        SignInWithGithub,
        signIn,
        logOut,
        darkMode, 
        toggleDarkMode 
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
