const firebaseConfig = {
    apiKey: "AIzaSyCqErGevd6HA9suNy_J0sofQIuP60Pbmn0",
    authDomain: "virtual-letter-92b9d.firebaseapp.com",
    databaseURL: "https://virtual-letter-92b9d-default-rtdb.firebaseio.com",
    projectId: "virtual-letter-92b9d",
    storageBucket: "virtual-letter-92b9d.appspot.com",
    messagingSenderId: "253665035859",
    appId: "1:253665035859:web:b16e10e36f02e9176de8a6"
  };
  firebase.initializeApp(firebaseConfig);
userName = localStorage.getItem("userName");
roomName = localStorage.getItem("roomName");

function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref("/rooms" + roomName).push({
    name:userName,
    message:msg,
    like: 0
    })
    document.getElementById("msg").value = ""
}

function getData() {
    firebase.database().ref("/rooms" + roomName).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if(childKey != "purpose") {
                firebaseMessageId = childKey;
                messageData = childData;
                //Início do código
                name = messageData["name"];
                message = messageData["message"]
                like = messageData["like"];
                nameWithTag = "<h4>" + name + "<img class = 'user_tick' src = ''> </h4>";
                messageWithTag = "<h4 class = 'message_h4'>" + message + "</h4>";
                likeButton = "<button class = 'btn btn-danger' id = "+firebaseMessageId+" value = "+like+" onclick = 'updateLike(this.id)'>";
                spanWithTag = "<span class = 'glyphicon glyphicon-thumbs-up' >Like: " + like + "</span></button>";
                row = nameWithTag + messageWithTag + likeButton + spanWithTag;
                document.getElementById("output").innerHTML += row;
                //Fim do código
            }
        });
    });
}
getData();

function updateLike(messageId){
    btn_id = messageId;
    likes = document.getElementById(btn_id).value;
    updateLikes = Number(likes) + 1;
    firebase.database().ref("/rooms" + roomName).child(messageId).update({
        like: updateLikes
    })
}
function logout() {
    localStorage.removeItem("userName");
    localStorage.removeItem("roomName");
    window.location = "index.html";
  }