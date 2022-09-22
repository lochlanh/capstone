// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB_XSjpqyZISEyBGPgKxVFIBvtDLhObt90',
  authDomain: 'fir-auth-a01e5.firebaseapp.com',
  projectId: 'fir-auth-a01e5',
  storageBucket: 'fir-auth-a01e5.appspot.com',
  messagingSenderId: '986691398931',
  appId: '1:986691398931:web:1102bc463f74f1f5a8bee6'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
