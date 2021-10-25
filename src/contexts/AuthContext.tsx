import { createContext, ReactNode, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { auth, firebase } from "../services/firebase";

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
  
        if (!displayName || !photoURL) {
          throw new Error('Missing information from Google Account.');
        }

        
        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
          email: email || '',
        })
        history.replace('/');
      }
      setLoading(false)
    })

    console.log('user', user)

    return () => {
      unsubscribe();
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {console.log(user)}, [user])

  async function signInWithGoogle() {
    setLoading(true)
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
  
        setUser(userCurrent)
      }


      history.push('/')
    } catch (err) {
      console.error(err);
      history.push('/login')
      alert(err);
    } finally {
      setLoading(false)
    }
  }

  async function registerWithEmailAndPassword(email: string, password: string) {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
    }
    catch (err){
      console.error(err);
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
      registerWithEmailAndPassword
      
    }}>
        {children}
    </AuthContext.Provider>
  );
}