// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, getDownloadURL, ref, listAll } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsMmWnrh3rR_q2zINQT_LQHimibypgYAY",
  authDomain: "agoschenone-17ab3.firebaseapp.com",
  projectId: "agoschenone-17ab3",
  storageBucket: "agoschenone-17ab3.appspot.com",
  messagingSenderId: "248336680965",
  appId: "1:248336680965:web:30ac639a41b5c38432746c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const storage = getStorage (app);


export const initFirebase = () => app

const storage = getStorage(app);

export { storage, getDownloadURL, ref, listAll};