import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../firebase'; // Import the auth object
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect, getRedirectResult } from 'firebase/auth';

const AuthContext = createContext({
  currentUser: null,
  googleSignIn: async () => {},
  logout: async () => {},
});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Google Sign-In Error:", error); // Log the entire error object
      if (error.code === 'auth/popup-blocked' || error.code === 'auth/popup-closed-by-user') {
        setError('Please allow popups for this website to sign in with Google');
      } else {
        setError(`Failed to sign in with Google. Error: ${error.message}`);
      }
    }
  };
  

  const logout = async () => {
    await auth.signOut();
  };

  useEffect(() => {
    getRedirectResult(auth).catch(console.error);

    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    googleSignIn,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
