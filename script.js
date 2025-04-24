// Firebase SDK লিংক ব্যবহার করে ফাংশনগুলো ইম্পোর্ট করছি
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

// Firebase কনফিগারেশন
const firebaseConfig = {
  apiKey: "AIzaSyD6FL0C_yml4Ww01wYyNAFc7auK8_2SGLw",
  authDomain: "earnbdt-28683.firebaseapp.com",
  projectId: "earnbdt-28683",
  storageBucket: "earnbdt-28683.appspot.com",
  messagingSenderId: "982019729101",
  appId: "1:982019729101:web:42c50d6e29d6149bac6b84"
};

// Firebase অ্যাপ ইনিশিয়ালাইজ
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Sign Up function
window.signUp = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      document.getElementById("message").innerText = "অ্যাকাউন্ট তৈরি হয়েছে!";
    })
    .catch((error) => {
      document.getElementById("message").innerText = "ত্রুটি: " + error.message;
    });
};

// Sign In function
window.signIn = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      document.getElementById("message").innerText = "সফলভাবে লগইন হয়েছে!";
    })
    .catch((error) => {
      document.getElementById("message").innerText = "ত্রুটি: " + error.message;
    });
};
