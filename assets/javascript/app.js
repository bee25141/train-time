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
            var firstTrainConverted = moment(firstTrainDb, "HH:mm");
            var difference = moment().diff(moment(firstTrainConverted), "minutes");
            var timeApart = difference % freqDb;
            var minutesAway = freqDb - timeApart;
            var nextTrain = moment().add(minutesAway, "minutes");
            var nextTrainConverted = moment(nextTrain).format("HH:mm");

            var row = $('<tr>');
            $(row).append($('<td>').text(nameDb));
            $(row).append($('<td>').text(destinationDb));
            $(row).append($('<td>').text(freqDb));
            $(row).append($('<td>').text(nextTrainConverted));
            $(row).append($('<td>').text(minutesAway));
            $("#trainsheet").append(row);

        });

    })
})