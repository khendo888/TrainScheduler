/*Create firebase database and initialize/link to html/js
create data for database (through the form)
need a button to enter data into database
need a form to enter the information
need to retrieve info from database
calculate train times (frequency, arrival, minutes away) using Momentsjs
once calculations are complete, all info should be returned to webpage to populate table
after entering data in form, each field should be cleared and ready for input

*/
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAMhl0vlf10d5xJ58VTt5vplekRc5LrwrI",
    authDomain: "trainscheduler-d9451.firebaseapp.com",
    databaseURL: "https://trainscheduler-d9451.firebaseio.com",
    projectId: "trainscheduler-d9451",
    storageBucket: "trainscheduler-d9451.appspot.com",
    messagingSenderId: "431147274022"
  };
  firebase.initializeApp(config);
  

// DEFINE VARIABLES
// -------------------------
  var database = firebase.database();
 

//PROCESSES
// ---------------------------
  //Create button click handler
  $("#submitBtn").on("click", function(){
      event.preventDefault();
     
      var trainName = $("#inputTrainName").val().trim();
      var destination = $("#inputDestination").val().trim();
      var trainTime = $("#inputTrainTime").val().trim();
      var frequency = $("#inputFrequency").val().trim();

       var newTrain = {

          trainName: trainName,
          destination: destination,
          trainTime: trainTime,
          frequency: frequency,
          dateAdded: firebase.database.ServerValue.TIMESTAMP
      };
      console.log(newTrain);
      database.ref().push(newTrain);

      $("#inputTrainName").val("");
      $("#inputDestination").val("");
      $("#inputTrainTime").val("");
      $("#inputFrequency").val("");
 });

    //function to calculate the time
      // var tFrequency = 
      // var firstTime = 

    //function to copy info to the webpage 

 


