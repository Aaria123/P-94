var firebaseConfig = {

      apiKey: "AIzaSyDY7Dk5w7q96KNBIoVrIIdM_pIVAz5YIXI",
    
      authDomain: "kwiter-33d12.firebaseapp.com",
    
      databaseURL: "https://kwiter-33d12-default-rtdb.firebaseio.com",
    
      projectId: "kwiter-33d12",
    
      storageBucket: "kwiter-33d12.appspot.com",
    
      messagingSenderId: "1032433204151",
    
      appId: "1:1032433204151:web:86e658909ad9f6f698c632"
    
    };
    
    
    // Initialize Firebase

    firebase.initializeApp(firebaseConfig);
    
    var firebaseConfig = {
      apiKey: "AIzaSyCX-U3oInpynsdwLpX0JCJblTsW7rOFibI",
      authDomain: "p-94-c78e4.firebaseapp.com",
      projectId: "p-94-c78e4",
      storageBucket: "p-94-c78e4.appspot.com",
      messagingSenderId: "439116107986",
      appId: "1:439116107986:web:076fc2e852a50d7eca1d0b"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
