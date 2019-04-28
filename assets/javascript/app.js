$(function () {
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

    //collecting the user train input
    $(".submit").on("click", function () {
        event.preventDefault();

        var name = $("#name-input").val().trim();
        var destination = $("#destination-input").val().trim();
        var firstTrain = $("#first-train-input").val().trim();
        var freq = $("#frequency-input").val().trim();

        //setting the train object
        var train = {
            name: name,
            destination: destination,
            firstTrain: firstTrain,
            freq: freq
        }
        //Pushing the new data to the database
        database.ref().push(train);

        //Pulling data from the database when train is added
        database.ref().on("child_added", function (snapshot) {
            console.log(snapshot.val());

            var nameDb = snapshot.val().name;
            var destinationDb = snapshot.val().name;
            var firstTrainDb = snapshot.val().firstTrain;
            var freqDb = snapshot.val().freq;

            //Using Moment JS to convert train arrivals
            var firstTimeConverted = moment(firstTrainDb, "HH:mm").subtract(1, "years");

        }) 
    })


    //Using Moment.JS to determine train times
    //   var convertedTrain = moment(FirstTrain, "hh:mm").subtract(1, "years");
    //   console.log(convertedTrain);
    //   var difference = currentTime.diff(moment(convertedTrain, "minutes"));
    //  var balance = difference % freq;
    //  var untilTrain = freq - balance;
    //  var nextTrain = moment().add(untilTrain, "minutes").format("hh:mm a");

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

})