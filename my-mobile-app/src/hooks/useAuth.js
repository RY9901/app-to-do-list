import { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      setError('');
    } catch (error) {
      setError('Failed to log in. Please check your credentials.');
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setError('');
    } catch (error) {
      setError('Failed to log out. Please try again.');
    }
  };

  return { user, error, login, logout };
};