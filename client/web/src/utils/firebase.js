import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAKkXPWpsI-PqlUZhreva0vx4oqdkXsoOY',
  authDomain: 'cofoundai-77647.firebaseapp.com',
  projectId: 'cofoundai-77647',
  storageBucket: 'assistly-kubernetes.appspot.com',
  messagingSenderId: '128886258568',
  appId: '1:128886258568:web:48bf124c0d9b90298e6646',
  measurementId: 'G-XVWF8XDKS5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
export const analytics = getAnalytics();
