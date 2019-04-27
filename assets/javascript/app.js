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
 
 
         var train = {
             name: "",
             destination: "",
             FirstTrain: "",
             freq: "",
             min: untilTrain,
             nextTrain: nextTrain
         }

         //collecting the user train input
         $(".submit").on("click", function () {
             // event.prevent.default();
             train.name = $("#name-input").val().trim();
             train.destination = $("#destination-input").val().trim();
             train.FirstTrain = $("#first-train-input").val().trim();
             train.freq = $("#frequency-input").val().trim();

             database.ref().push(train);
         })
         //Using Moment.JS to determine train times
         var convertedTrain = moment(FirstTrain, "hh:mm");
         var difference = currentTime.diff(moment(convertedTrain, "minutes"));
         var balance = difference % freq;
         var untilTrain = freq - balance;
         var nextTrain = moment().add(untilTrain, "minutes").format("hh:mm a");