import firebase from 'firebase'   
//The core Firebase JS SDK is always required and must be listed first -->
//<script src="https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js"></script>

//TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

  // Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAPkqEBmHgdl9gZgqe1v1WJPeQV3_1dJbw",
    authDomain: "sistema-pos-1d101.firebaseapp.com",
    databaseURL: "https://sistema-pos-1d101-default-rtdb.firebaseio.com",
    projectId: "sistema-pos-1d101",
    storageBucket: "sistema-pos-1d101.appspot.com",
    messagingSenderId: "477189432368",
    appId: "1:477189432368:web:64fd94155bead59052b9f5"
  };
  // Initialize Firebase
  var fireBD=firebase.initializeApp(firebaseConfig);
  
export default fireBD.database().ref();