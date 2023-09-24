import './register.css';
import { useState } from 'react';
import { app } from '../firebase';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export default function RegisterBox(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };
  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const register = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        props.log()
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  };
  const signin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user)
        props.log();
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  const googleSignin = () =>{
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log(token)
        // The signed-in user info.
        const user = result.user;
        console.log(user)
        props.img(user.photoURL);
        props.log();
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        console.log(errorCode)
        const errorMessage = error.message;
        alert(errorMessage)
        // The email of the user's account used.
        const email = error.customData.email;
        console.log(email)
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        alert(credential);
        // ...
      });
  }

  return (
    <div id="inside-box" className="flex flex-col gap-2 items-start">
      <div className="text-4xl font-['Montserrat'] font-bold">Sign In</div>
      <div className="font-['Lato'] mb-5">Sign in to your account</div>
      <div className="flex flex-row mb-4 gap-6 w-[423px] items-start">
        <button id="Signin-with-google" onClick={googleSignin}>
          <div
            id="White"
            className="flex flex-row gap-3  h-8 items-center px-5"
          >
            <img
              src="https://file.rendit.io/n/aGOmIEU2HMeLOms8b1N6.svg"
              id="Googleicon"
              alt="google"
              className="w-4 shrink-0"
            />
            <div className="text-center text-xs font-['Montserrat'] text-[#858585]">
              Sign in with Google
            </div>
          </div>
        </button>

        <button id="Signin-with-apple">
          <div
            id="White1"
            className="flex flex-row gap-3  h-8 items-center pt-2 pl-6 pr-10"
          >
            <img
              src="https://file.rendit.io/n/0RWqadRARI9Ou7U85t3P.svg"
              id="Apple"
              alt="apple"
              className="self-start w-3 shrink-0"
            />
            <div className="text-center text-xs font-['Montserrat'] text-[#858585]">
              Sign in with Apple
            </div>
          </div>
        </button>
      </div>
      <div
        id="Card-reg"
        className="bg-white flex flex-col mb-2 w-100 h-7 shrink-0 items-start p-8 rounded-[20px]"
        style={{ height: '18rem' }}
      >
        <div className="font-['Lato']">Email address</div>

        <input
          className="bg-[#f5f5f5] self-stretch flex flex-col justify-center mb-2 h-10 shrink-0 items-start p-3 rounded-lg"
          type="text"
          value={email}
          onChange={updateEmail}
          placeholder="johndoe@gmail.com"
        />

        <div className="font-['Lato']">Password</div>
        <input
          className="bg-[#f5f5f5] self-stretch flex flex-col justify-center mb-2 p-3 h-10 shrink-0 items-start rounded-lg"
          type="password"
          value={password}
          onChange={updatePassword}
        />

        <div className="font-['Lato'] text-[#346bd4] mb-3 ml-px">
          <button>Forgot password?</button>
        </div>
        <button
          id="ButtonPrimary"
          className="bg-[#4285f4] flex flex-col h-10 shrink-0 items-start pl-32 py-2 rounded-lg"
          onClick={signin}
        >
          <div
            id="btn-text-sign"
            className="text-center font-['Montserrat'] font-bold text-white"
          >
            Sign In
          </div>
        </button>
      </div>
      <div className="text-center font-['Lato'] text-[#858585] ml-16">
        Don’t have an account?{' '}
        <button onClick={register}>
          {' '}
          <div id="registerHere" className="text-[#346bd4] contents">
            Register here
          </div>
        </button>
      </div>
    </div>
  );
}
