
//AÑADE LOS ENLACES FIREBASE
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC-IzOqSEY9DWUz3ef0H5ZJ1fkKI1hTl5g",
    authDomain: "kwitter-e85bb.firebaseapp.com",
    projectId: "kwitter-e85bb",
    storageBucket: "kwitter-e85bb.appspot.com",
    messagingSenderId: "82237891498",
    appId: "1:82237891498:web:049d7cdd31deb0308681d3"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
      purpose:"adding user"
    });
    }   