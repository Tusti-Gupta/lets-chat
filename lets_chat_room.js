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

function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose: "adding room"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "lets_chat_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names=childKey;
  console.log("Room Names - " + Room_names);
  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names + "</div>";
  document.getElementById("output").innerHTML += row;
});});}
getData();

user_name= localStorage.getItem("User_name");
document.getElementById("user_name").innerHTML = user_name;

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "lets_chat_page.html";
}