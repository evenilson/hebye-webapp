import { createContext, ReactNode, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { auth, firebase } from "../services/firebase";

import {msgErrorFirebaseTranslate } from '../utils/msgErrorFirebaseTranslate';

import { toastMessage } from '../utils/toastMessage';

type User = {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

type AuthContextType = {
  user: User | undefined;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  registerWithEmailAndPassword: (email: string, password: string) => Promise<void>;
  signInWithEmailAndPassword: (email: string, password: string) => Promise<void>;
  updateProfile: (firstName: string, lastName: string) => Promise<void>;
  sendPasswordResetEmail: (email: string) => Promise<void>;

  logout: () => void;
}

type AuthProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext( {} as AuthContextType);

export function AuthContextProvider({children}: AuthProviderProps) {

  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(true);

  const history = useHistory();

  useEffect(() => {
    setLoading(true)
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        const { displayName, photoURL, uid, email } = user;

        console.log(user)

        setUser({
          id: uid,
          name: displayName || '',
          avatar: photoURL || '',
          email: email || '',
        })

        if(!displayName) {
          history.push('/finalizar-cadastro');
        } else {
          history.push('/');
        }

      }
      setLoading(false)
    })

    return () => {
      unsubscribe();
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function signInWithGoogle() {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    try {
      const res = await auth.signInWithPopup(googleProvider);
      const userRes = res.user;

      if(userRes){
        const userCurrent = {
          id: userRes.uid,
          name: userRes.displayName || '',
          email: userRes.email || '',
          avatar: userRes.photoURL || '',
        }

        if(!userRes.displayName) {
          history.push('/finalizar-cadastro');
        } else {
          history.push('/');
        }
        setUser(userCurrent)
      }
      
    } catch (err) {
      const errCode = (err as any).code;
      const errMsg = msgErrorFirebaseTranslate(errCode);
      toastMessage({type: 'error', message: errMsg});
      history.push('/login');
    }
  }

  async function signInWithEmailAndPassword(email: string, password: string){
    try {
      const { user } = await auth.signInWithEmailAndPassword(email, password);

      if(!user?.displayName){
        history.push('/finalizar-cadastro');
      }else{
        history.push('/');
      }

    } catch (err) {
      const errCode = (err as any).code;
      const errMsg = msgErrorFirebaseTranslate(errCode);
      toastMessage({type: 'error', message: errMsg});
    }
  };

  async function sendPasswordResetEmail(email: string){
    try {
      await auth.sendPasswordResetEmail(email);

      toastMessage({type: 'success', message: `Link enviado, verifique em ${email}`});
    } catch (err) {
      const errCode = (err as any).code;
      const errMsg = msgErrorFirebaseTranslate(errCode);
      toastMessage({type: 'error', message: errMsg});
    }
  };

  async function updateProfile(firstName:string, lastName: string) {
    const userCurrent = auth.currentUser;
    const displayName = firstName + ' ' + lastName;

    try {
      await userCurrent?.updateProfile({
        displayName: displayName,
      });

      if(user){
        setUser({
          ...user,
          name: displayName,
        })
      }

      history.push('/');
    }
    catch (err) {
      const errCode = (err as any).code;
      const errMsg = msgErrorFirebaseTranslate(errCode);
      toastMessage({type: 'error', message: errMsg});
    }
  }

  async function registerWithEmailAndPassword(email: string, password: string) {
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);

      console.log('user', user);

      if(user) {

        setUser({
          id: user.uid,
          name: user.displayName || '',
          avatar: user.photoURL || '',
          email: email || '',
        })

        history.push('/finalizar-cadastro');
      }
    }
    catch (err){
      const errCode = (err as any).code;
      const errMsg = msgErrorFirebaseTranslate(errCode);
      toastMessage({type: 'error', message: errMsg});
    }
  }

  const logout = () => {
    setLoading(true);
    auth.signOut().then(
      () => { setUser(undefined) }
    ).catch((err) => {
      console.error(err);
    }).finally(
      () => { setLoading(false) }
    )
  };

  return (
    <AuthContext.Provider value={{
      user, 
      signInWithGoogle, 
      logout, 
      loading,
      registerWithEmailAndPassword,
      signInWithEmailAndPassword,
      sendPasswordResetEmail,
      updateProfile     
    }}>
        {children}
    </AuthContext.Provider>
  );
}