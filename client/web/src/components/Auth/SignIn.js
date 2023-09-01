/**
 * src/components/Auth/SignIn.jsx
 * signin and signup with google account
 *
 * created by Lynchee on 7/20/23
 */

import React, { useState } from 'react';

import { useAuth } from '@clerk/clerk-react';
import { getHostName } from '../../utils/urlUtils';
import './styles.css';
import { isIP } from 'is-ip';

export const sendTokenToServer = async token => {
  // Send token to server
  const scheme = window.location.protocol;
  const url = scheme + '//' + getHostName();

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      console.error('Sent token failed');
    }
  } catch (error) {
    console.error('Sent token failed. ', error);
  }
};

// export const signInWithGoogle = async (isLoggedIn, setToken) => {
//   const provider = new GoogleAuthProvider();
//   return signInWithPopup(auth, provider) // Return the promise here
//     .then(async result => {
//       // This gives you a Google Access Token. You can use it to access the Google API.
//       const credential = GoogleAuthProvider.credentialFromResult(result);
//       const token = await auth.currentUser.getIdToken();

//       // The signed-in user info.
//       const user = result.user;
//       isLoggedIn.current = true;
//       setToken(token);
//       await sendTokenToServer(token);

//       console.log('Sign-in successfully');
//     })
//     .catch(error => {
//       // Handle Errors here.
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.error(
//         `Error occurred during sign in. Code: ${errorCode}, Message: ${errorMessage}`
//       );
//       // The email of the user's account used.
//       const email = error.customData.email;
//       // The AuthCredential type that was used.
//       const credential = GoogleAuthProvider.credentialFromError(error);
//       isLoggedIn.current = false;
//     });
// };


export const signInWithClerky = async () => {
  // Implement the signInWithClerky function here
  // You may need to use a different provider or method depending on the Clerky authentication API
  const frontendApi = 'comic-lemur-89.clerk.accounts.dev';
  const { getToken, isLoaded, isSignedIn } = useAuth();
  let setToken = '';
  if (isSignedIn) {
    setToken = await getToken();
  }
  return setToken;
};

const SignIn = ({ isLoggedIn, setToken }) => {
  const [isLoading, setIsLoading] = useState(false);

  const signIn = async e => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await signInWithClerky();
    } catch (error) {
      console.error('Error during sign in:', error);
    }
    setIsLoading(false);
  };

  return (
    <form onSubmit={signIn}>
      <button type='submit' disabled={isLoading} className='auth-btn'>
        {isLoading ? 'Signing In...' : 'Sign in'}
      </button>
    </form>
  );
};

export default SignIn;
