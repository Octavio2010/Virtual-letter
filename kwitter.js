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
function addUser() {

  userName = document.getElementById("userName").value;//Caixa de texto com o nome do usuário//
  firebase.database().ref("/").child(userName).update({purpose:"usúario novo"})
  localStorage.setItem("userName", userName);
  setTimeout(() => {
    window.location = "kwitterRoom.html";//O window.location é responsável para navegar até outra tela// 
  }, 2000 );
}

