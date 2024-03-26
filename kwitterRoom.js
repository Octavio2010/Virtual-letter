
const firebaseConfig = {
  apiKey: "AIzaSyBf_XuR2T8jsKVeapM7zmHHAC7Cqsv3N0U",
  authDomain: "aula-94-40e5a.firebaseapp.com",
  databaseURL: "https://aula-94-40e5a-default-rtdb.firebaseio.com",
  projectId: "aula-94-40e5a",
  storageBucket: "aula-94-40e5a.appspot.com",
  messagingSenderId: "128429505899",
  appId: "1:128429505899:web:cbd468f5fbec113106202e",
  measurementId: "G-FY7W0E3C2G"
};
firebase.initializeApp(firebaseConfig);

userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()//Botão adiciona sala//
{
  roomName = document.getElementById("roomName").value;
  //Eu quero uma ferramenta do html, o input//

  firebase.database().ref("/").child(roomName).update({//É firebase, uma plataforma que fornece bancos de dados, que guardam registros e informações nossas//
    purpose: "adicionar nome de sala"//Purpose é um comando que chama o nome da sala//
  });

  localStorage.setItem("roomName", roomName);//Set: todo código que tem "set" na frente significa que ele será alterado

  window.location = "kwitterPage.html";//Serve para mudar outra tela/janela
}
// Função getData(), essa função obtém todos os nomes das salas que estão no firebase e as exibe em kwitterRoom.html
function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      roomNames = childKey;
      console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id=" + roomNames + " onclick='redirectToRoomName(this.id)' >#" + roomNames + "</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name) //Função redirectToRoomName(), essa função deve ser chamada quandoclicamos em qualquer nome de sala sob #SALASTRENDING
{
  console.log(name);
  localStorage.setItem("roomName", name);
  window.location = "kwitterPage.html";
}

function logout() {
  localStorage.removeItem("userName");
  localStorage.removeItem("roomName");
  window.location = "index.html";
}
