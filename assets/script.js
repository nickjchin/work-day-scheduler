// Create our document ready function to make sure nothing runs before we load the page.
$(document).ready(function () {
  // All of our code is ran in here

  var saveButton9 = $("#save-button-9");
  var saveButton10 = $("#save-button-10");
  // var saveButton11 = $("#save-button-9");
  // var saveButton12 = $("#save-button-9");

  // 9AM function listen for click events on the page
  saveButton9.on("click", function () {
    // grab the saved event options
    //create variable to save user input and time
    // var time = moment().format("hA");
    var time = 9;
    var userInput = document.querySelector(".user-input").value;
    console.log(userInput);
    // save to localStorage
    localStorage.setItem("event", JSON.stringify({ time: time, event: userInput }));
    // Alert user that items have been saved to localStorage.
    var localStorageAlert = document.getElementById("alert");
    localStorageAlert.innerText = "Event saved to local storage \u2713";
    // create some kind of timeOut value that removes the notification
    $("#alert").fadeIn("slow").delay(3000).fadeOut("slow");
  });

  // 10AM function listen for click events on the page
  saveButton10.on("click", function () {
    // grab the saved event options
    //create variable to save user input and time
    var time = 10;
    var userInput = document.querySelector(".user-input").value;
    console.log(userInput);
    // save to localStorage
    localStorage.setItem("event", JSON.stringify({ time: time, event: userInput }));
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
