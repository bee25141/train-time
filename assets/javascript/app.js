 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyCOM60Pwe2EbzkhKl2tg6iVpQdz3z5jifA",
    authDomain: "train-time-5ef4e.firebaseapp.com",
    databaseURL: "https://train-time-5ef4e.firebaseio.com",
    projectId: "train-time-5ef4e",
    storageBucket: "train-time-5ef4e.appspot.com",
    messagingSenderId: "297516977528"
  };
  firebase.initializeApp(config); 

//setting variables for database, current time, and train object
var database = firebase.database();
var currentTime = moment();
var train= {
    name: "",
    destination: "",
    FirstTrain: "",
    freq: ""
}

//collecting the user train input
$(".submit").on("click", function(){
    // event.prevent.default();
    train.name = $("#name-input").val().trim();
    train.destination = $("#destination-input").val().trim();
    train.FirstTrain = $("#first-train-input").val().trim();
    train.freq = $("#frequency-input").val().trim();
})
