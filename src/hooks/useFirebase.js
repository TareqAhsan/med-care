import { useEffect, useState } from "react";
import firebaseInitialize from "../Firebase/firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

firebaseInitialize();

const useFirebase = () => {
  const [user, setUser] = useState();
  const [error, setError] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [isLoading, setisLoading] = useState(true);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  // google signin
  const signInwithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // sign with email pass
  const signInWithEmail = () => {
    // e.preventDefault();
    return signInWithEmailAndPassword(auth, email, password);
  };

  // set name and image
  const setNameAndImage = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {})
      .catch((error) => {
        setError(error.message);
      });
  };

  // GEt the currently signed in user obesrver
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log(user);
      } else {
        setUser({});
      }
      setisLoading(false);
    });
    return () => unsubscribed;
  }, []);

  // Logout
  const LogOut = () => {
    signOut(auth)
      .then(() => {
        setUser({}); // Sign-out successful.
      })
      .catch((error) => {
        setisLoading(false);
        setError(error.message); // An error happened.
      });
  };

  //sign up
  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setNameAndImage();
        setError("");
        // alert("created");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // getEmail
  const getEmail = (e) => {
    setEmail(e?.target?.value);
  };
  //get password
  const getPassword = (e) => {
    setPassword(e?.target?.value);
  };
  //get name
  const getName = (e) => {
    setName(e?.target?.value);
  };
  //get Photo
  const getPhoto = (e) => {
    setPhoto(e?.target?.value);
  };

  return {
    signInwithGoogle,
    user,
    setUser,
    error,
    setError,
    LogOut,
    getEmail,
    getPassword,
    getPhoto,
    getName,
    signUp,
    signInWithEmail,
    setisLoading,
    isLoading,
  };
};

export default useFirebase;
