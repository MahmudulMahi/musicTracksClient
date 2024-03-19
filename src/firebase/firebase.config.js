// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey:import.meta.env.VITE_apikey,
  // authDomain:import.meta.env.VITE_authDomain,
  // projectId:import.meta.env.VITE_projectId,
  // storageBucket:import.meta.env.VITE_storageBucket,
  // messagingSenderId:import.meta.env.VITE_messagingSenderId,
  // appId:import.meta.env.VITE_appId
  apiKey:"AIzaSyDC22qkcHc5iFWxG02jnMxy7Wqn-a499zU",
  authDomain:"musictracks-ed23d.firebaseapp.com",
  projectId:"musictracks-ed23d",
  storageBucket:"musictracks-ed23d.appspot.com",
  messagingSenderId:"586669349463",
  appId:"1:586669349463:web:4fa8a256c2f49c493a2112"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;