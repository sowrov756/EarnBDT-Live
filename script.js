const firebaseConfig = {
  apiKey: "AIzaSyDemoApiKey123456",
  authDomain: "earnbdt-demo.firebaseapp.com",
  projectId: "earnbdt-demo",
  storageBucket: "earnbdt-demo.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef123456"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function signUp() {
  const email = document.getElementById('email').value;
  const pass = document.getElementById('password').value;
  auth.createUserWithEmailAndPassword(email, pass)
    .then(() => document.getElementById('message').innerText = "Registered!")
    .catch(e => document.getElementById('message').innerText = e.message);
}

function signIn() {
  const email = document.getElementById('email').value;
  const pass = document.getElementById('password').value;
  auth.signInWithEmailAndPassword(email, pass)
    .then(() => document.getElementById('message').innerText = "Logged in!")
    .catch(e => document.getElementById('message').innerText = e.message);
}

function withdraw() {
  const amount = parseInt(document.getElementById('withdrawAmount').value);
  const msg = document.getElementById('withdrawMsg');
  if (amount < 500) {
    msg.innerText = "Minimum withdraw is 500 BDT.";
  } else if (amount > 25000) {
    msg.innerText = "Maximum withdraw limit is 25,000 BDT.";
  } else {
    msg.innerText = "Withdraw request submitted!";
  }
}
