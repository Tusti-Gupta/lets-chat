function addUser() {
    username = document.getElementById("username").value;
    localStorage.setItem("User_name", username);
    window.location = "lets_chat_room.html";
}