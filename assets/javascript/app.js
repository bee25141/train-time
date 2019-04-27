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
     //  min: untilTrain,
     //  nextTrain: nextTrain
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

 //function to display table with new input information
//  function display(name, destination, freq, minUntil, nextTrain) {
//      var td1 = $("<td>");
//      td1.text(name);
//      var td2 = $("<td>");
//      td2.text(destination);
//      var td3 = $("<td>");
//      td3.text(freq);
//      var td4 = $("<td>");
//      td4.text(minUntil);
//      var td5 = $("<td>");
//      td5.text(nextTrain);

//      var row = $("<tr>");
//      row.append(td1);
//      row.append(td2);
//      row.append(td3);
//      row.append(td4);
//      console.log(name);

//      $("#trainsheet").append(row);
//  }

 //Using Moment.JS to determine train times
  var convertedTrain = moment(FirstTrain, "hh:mm");
  var difference = currentTime.diff(moment(convertedTrain, "minutes"));
  var balance = difference % freq;
  var untilTrain = freq - balance;
  var nextTrain = moment().add(untilTrain, "minutes").format("hh:mm a");