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

  function addUser()
  {
    userName = document.getElementById("userName").value;
    firebase.database().ref("/").child(userName).update({
        purpose : "adicionar usuário"
    });
  }