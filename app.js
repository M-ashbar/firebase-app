// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut  } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCWsFg69r1cFrmiRMl8eb_j7toldUDH4HE",
    authDomain: "logsign-app-96d69.firebaseapp.com",
    projectId: "logsign-app-96d69",
    storageBucket: "logsign-app-96d69.firebasestorage.app",
    messagingSenderId: "471128058003",
    appId: "1:471128058003:web:88da82576005e70cca0566"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


function signup(){
    var email = document.getElementById("signup-email").value;
    var password = document.getElementById("signup-password").value;
    var confirmPassword = document.getElementById("signup-confirm-password").value;

    if(email === "" || password === "" || confirmPassword === ""){
      alert("Please fill all fields");
      return;
  }

  if(password !== confirmPassword){
      alert("Passwords do not match!");
      return;
  }


    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
        alert("SIGNUP SUCCESSFULL",user);
        
        // ...
      })
      
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        
        // ..
      });   
    
    
    if(email == "" || password == "" || confirmPassword == ""){
        alert("Please fill all fields");
        return;
    }

}
const signUpButton = document.getElementById("btn-signup")
signUpButton.addEventListener("click", signup)

//====================== FUNCTION LOGIN ============================

function login(){
    var email = document.getElementById("login-email").value;
    var password = document.getElementById("login-password").value;

    signInWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);

        alert("USER LOGGED IN SUCESS", user)

        //...
      })
     .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);

        //...
      });
}
const loginbtn = document.getElementById("btn-login");
loginbtn.addEventListener("click", login );


const welcomeBox = document.getElementById("welcome-box");
const welcomeNote = document.getElementById("welcome-note");
// const authForm = document.getElementById("auth");  // Ye hata diya kyunki HTML mein nahi hai

onAuthStateChanged(auth, (user) => {
  if (!welcomeBox || !welcomeNote) {
    console.error("Some elements are missing!");
    return;
  }

  if (user) {
    welcomeBox.style.display = 'block';
    welcomeNote.innerText = `WELCOME ${user.email}`;
  } else {
    welcomeBox.style.display = "none";
    welcomeNote.innerText = "";
  }
});

//=============== LOGOUT ======================

function logout(){
    signOut(auth)
     .then(() => {
        // Sign-out successful.
        console.log("User signed out successfully.");

        //...
      })
     .catch((error) => {
        // An error happened.
        console.error("Error signing out:", error);

        //...
      });
}

const logoutBtn = document.getElementById("logout-btn");
logoutBtn.addEventListener("click", logout);