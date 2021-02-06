// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBob3XdSOukVERzADCh9lslU78qVoT1s-s",
    authDomain: "femme-hacks-hub.firebaseapp.com",
    databaseURL: "https://femme-hacks-hub-default-rtdb.firebaseio.com",
    projectId: "femme-hacks-hub",
    storageBucket: "femme-hacks-hub.appspot.com",
    messagingSenderId: "507237756023",
    appId: "1:507237756023:web:d4daa3fe3b0bc3ebc4ea72",
    measurementId: "G-GD53MWJZZL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

    //Retrieve Information
    var nameForm, linkURL, imageURL, email, mentalHealthBool, entertainmentBool, groupBool, singleBool, freeBool, physicalBool, gameBool;
    function retrieveResource(){
        nameForm = document.getElementById("nameForm").value;
        linkURL = document.getElementById("linkURL").value;
        imageURL = document.getElementById("imageURL").value;
        emailForm = document.getElementById("emailForm").value;
        gameBool = document.getElementById("gameBool").value;
        entertainmentBool = document.getElementById("entertainmentBool").value;
        physicalBool = document.getElementById("physicalBool").value;
        mentalHealthBool = document.getElementById("mentalHealthBool").value;
        groupBool = document.getElementById("groupBool").value;
        singleBool = document.getElementById("singleBool").value;
        freeBool = document.getElementById("freeBool").value;

        console.log("start works!");
    }

    //Write Resource
    function writeResource(){
      retrieveResource();
    firebase.database().ref("Resource/"+nameForm).set({
        name: nameForm,
        link: linkURL,
        imageLink: imageURL,
        email: emailForm,
        game: gameBool,
        entertainment: entertainmentBool,
        physical: physicalBool,
        mentalHealth: mentalHealthBool,
        group: groupBool,
        single: singleBool,
        free: freeBool
    });
    console.log("is this working");
}