// Create our document ready function to make sure nothing runs before we load the page.
$(document).ready(function () {
  // All of our code is ran in here

  var saveButton9 = $("#save-button-9");
  var saveButton10 = $("#save-button-10");
  // var saveButton11 = $("#save-button-9");
  // var saveButton12 = $("#save-button-9");



  // 9AM FUNCTION: listen for click events on the page
    saveButton9.on("click", function(event) {
      event.preventDefault();
    // grab the saved event options
    //create variable to save user input and time
    var arr = []
    var time = 9;
    var userInput = document.querySelector(".user-input-9").value;
    console.log(userInput);

    // save to localStorage
    var existingEvents = JSON.parse(localStorage.getItem("allEvents"));
    if (existingEvents == null) existingEvents = [];
    var userPlannedEvent = { time: time, event: userInput };
    localStorage.setItem("events", JSON.stringify(userPlannedEvent));
    existingEvents.push(userPlannedEvent);
    localStorage.setItem("allEvents", JSON.stringify(existingEvents));


    // var existingUserInfo = JSON.parse(localStorage.getItem("allScores"));
    // if (existingUserInfo == null) existingUserInfo = [];
    // var userInitials = document.getElementById("initials").value;
    // var userHighScoreInfo = { initials: userInitials, score: scoreCounter };
    // localStorage.setItem("userHighScoreInfo", JSON.stringify(userHighScoreInfo));
    // // store allScores to localStorage
    // existingUserInfo.push(userHighScoreInfo);
    // localStorage.setItem("allScores", JSON.stringify(existingUserInfo));



      // Need to check to see if array updates with button 10 clicks

    // Alert user that items have been saved to localStorage.
    var localStorageAlert = document.getElementById("alert");
    localStorageAlert.innerText = "Event saved to local storage \u2713";
    // create some kind of timeOut value that removes the notification
    $("#alert").fadeIn("slow").delay(3000).fadeOut("slow");
  });
  



  // 10AM FUNCTION: listen for click events on the page
  saveButton10.on("click", function () {
    // grab the saved event options
    //create variable to save user input and time
    var time = 10;
    var arr = [];
    var userInput = document.querySelector(".user-input-10").value;
    console.log(userInput);
    // save to localStorage
    var existingEvents = JSON.parse(localStorage.getItem("allEvents"));
    if (existingEvents == null) existingEvents = [];
    var userPlannedEvent = { time: time, event: userInput };
    localStorage.setItem("events", JSON.stringify(userPlannedEvent));
    existingEvents.push(userPlannedEvent);
    localStorage.setItem("allEvents", JSON.stringify(existingEvents));



    // localStorage.setItem("event", JSON.stringify({ time: time, event: userInput }));
    // Alert user that items have been saved to localStorage.
    var localStorageAlert = document.getElementById("alert");
    localStorageAlert.innerText = "Event saved to local storage \u2713";
    // create some kind of timeOut value that removes the notification
    $("#alert").fadeIn("slow").delay(3000).fadeOut("slow");
  });


  // create time updater function()
  // get current time
  var currentTime = moment().format("LT");
  // create our loop to go over all the time blocks (rows)  -  each row has id indicating which hour

  //   for()

  // if else if statement to:
  // ().removeClass
  // check to see if we have passed our time
  // check out removeClass and addClass
  // check to see if current hour (current time var) matches physcial hour (ids)
  // check to see if the times is in the future

  // Retrieve localStorage and render items to the correct rows    // could copy paste 10 times if one row works
});
