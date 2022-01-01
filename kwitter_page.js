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

room_name = localStorage.getItem("room_name")
user_name = localStorage.getItem("user_name")

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}
