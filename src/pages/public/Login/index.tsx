import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { auth } from "../../../constants/firebaseConfig";

export const Login = () => {
  const handleSignIn = () => {
    createUserWithEmailAndPassword(auth, "teste@teste.com", "password")
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user, "user");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage, "errorMessage");
      });
  };
  return <div>Login</div>;
};
