var firebaseConfig = {
      apiKey: "AIzaSyBpkw6qSb8Fse7HSr53jrSt62tIn-fgUfs",
      authDomain: "kwitter-33b12.firebaseapp.com",
      databaseURL: "https://kwitter-33b12-default-rtdb.firebaseio.com",
      projectId: "kwitter-33b12",
      storageBucket: "kwitter-33b12.appspot.com",
      messagingSenderId: "774576902836",
      appId: "1:774576902836:web:7c26d5a20a6e2b5b513de1"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();


function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
    });

    localStorage.setItem("room_name",room_name);

    window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_html");
      window.location = "index.html";
}
