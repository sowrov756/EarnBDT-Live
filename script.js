// Firebase SDK থেকে প্রয়োজনীয় ফাংশন ইম্পোর্ট
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

// তোমার Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyD6FL0C_yml4Ww01wYyNAFc7auK8_2SGLw",
  authDomain: "earnbdt-28683.firebaseapp.com",
  projectId: "earnbdt-28683",
  storageBucket: "earnbdt-28683.appspot.com",
  messagingSenderId: "982019729101",
  appId: "1:982019729101:web:42c50d6e29d6149bac6b84"
};

// Firebase ইনিশিয়ালাইজ
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Sign Up Function
function signUp() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      document.getElementById("message").innerText = "একাউন্ট তৈরি হয়েছে!";
    })
    .catch((error) => {
      document.getElementById("message").innerText = "Error: " + error.message;
    });
}

// Sign In Function
function signIn() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      document.getElementById("message").innerText = "সফলভাবে লগ ইন হয়েছে!";
    })
    .catch((error) => {
      document.getElementById("message").innerText = "Error: " + error.message;
    });
}
