import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import {getAuth, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import{getFirestore, getDoc, doc} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js"

const firebaseConfig = {
    apiKey: "AIzaSyAAF4mooFVtYYX_1PV0gIfpxIezG40uUZc",
    authDomain: "ru-authentication.firebaseapp.com",
    projectId: "ru-authentication",
    storageBucket: "ru-authentication.appspot.com",
    messagingSenderId: "25006053829",
    appId: "1:25006053829:web:2751280141d12c8c1f93ac",
  };
 
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const auth=getAuth();
  const db=getFirestore();

  onAuthStateChanged(auth, (user)=>{
    const loggedInUserId=localStorage.getItem('loggedInUserId');
    if(loggedInUserId){
        console.log(user);
        const docRef = doc(db, "users", loggedInUserId);
        getDoc(docRef)
        .then((docSnap)=>{
            if(docSnap.exists()){
                const userData=docSnap.data();
                document.getElementById('loggedUserFName').innerText=userData.firstName;
                document.getElementById('loggedUserEmail').innerText=userData.email;
                document.getElementById('loggedUserLName').innerText=userData.lastName;

            }
            else{
                console.log("no document found matching id")
            }
        })
        .catch((error)=>{
            console.log("Error getting document");
        })
    }
    else{
        console.log("User Id not Found in Local storage")
    }
  })

  const logoutButton=document.getElementById('logout');

  logoutButton.addEventListener('click',()=>{
    localStorage.removeItem('loggedInUserId');
    signOut(auth)
    .then(()=>{
        window.location.href='SignIn.html';
    })
    .catch((error)=>{
        console.error('Error Signing out:', error);
    })
  })



  






// setting up firebase with our website
// const firebaseApp = firebase.initializeApp({
//     apiKey: "AIzaSyAAF4mooFVtYYX_1PV0gIfpxIezG40uUZc",
//     authDomain: "ru-authentication.firebaseapp.com",
//     projectId: "ru-authentication",
//     storageBucket: "ru-authentication.appspot.com",
//     messagingSenderId: "25006053829",
//     appId: "1:25006053829:web:2751280141d12c8c1f93ac",
//     measurementId: "G-D60NWS947N"
// });
// const db = firebaseApp.firestore();
// const auth = firebaseApp.auth();

// // Sign up function
// const signUp = () => {
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;
//   console.log(email, password)
//   // firebase code
//   firebase.auth().createUserWithEmailAndPassword(email, password)
//     .then((result) => {
//         // Signed in 
//         // document.write("You are Signed Up")
//         window.location = "./SignIn.html";
//         console.log(result)
//         // ...
//     })
//     .catch((error) => {
//         console.log(error.code);
//         console.log(error.message)
//         // ..
//     });
// }

// // Sign In function
// const signIn = () => {
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;
//   // firebase code
//   firebase.auth().signInWithEmailAndPassword(email, password)
//     .then((result) => {
//         // Signed in 
//         window.location = "./home.html"; // Redirects to home.html
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error.code);
//         console.log(error.message);
//         // Consider adding user feedback here
//     });
// }


//This method gets invoked in the UI when there are changes in the authentication state:
// 1). Right after the listener has been registered
// 2). When a user is signed in
// 3). When the current user is signed out
// 4). When the current user changes

// Lifecycle hooks
// auth.onAuthStateChanged(function(user) {
//   if (user) {

//     var email = user.email
  
//     var users = document.getElementById("user")
//     var text = document.createTextNode(email);

//     users.appendChild(text);

//     console.log(users)
//     // is signed in
//   } else {
//     // no user signed in
//   }
// })

// console.log(auth)

// let signOutButton = document.getElementById("signout")
// signOutButton.addEventListener("click", (e) => {
//   //Prevent Default Form Submission Behavior
//   e.preventDefault()
//   console.log("clicked")
  
//   auth.signOut()
//   alert("Signed Out")
//   window.location = "index.html";
// })


