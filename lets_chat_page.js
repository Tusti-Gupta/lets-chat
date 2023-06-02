//YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyCknTQB84fcEuEHIUx3DbJSIJoG065g9IU",
    authDomain: "kwitter-e0997.firebaseapp.com",
    databaseURL: "https://kwitter-e0997-default-rtdb.firebaseio.com",
    projectId: "kwitter-e0997",
    storageBucket: "kwitter-e0997.appspot.com",
    messagingSenderId: "508836944438",
    appId: "1:508836944438:web:2a64eb6ce286283addd697"
  };
firebase.initializeApp(firebaseConfig);

room_name = localStorage.getItem("room_name");
user_name = localStorage.getItem("User_name");

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name: user_name,
          message: msg,
          likes: 0
    });
    document.getElementById("msg").value = "";
}

function logout() {
    localStorage.removeItem("User_name");
    localStorage.removeItem("room_name")      
    window.location.replace("index.html");
}