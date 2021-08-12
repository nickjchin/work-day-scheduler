// Create our document ready function to make sure nothing runs before we load the page.
$(document).ready(function () {
  // All of our code is ran in here

  var saveButtonEl = $("#save-button");

  // function listen for click events on the page
  saveButtonEl.on("click", function () {
    // grab the saved event options

    //create variable to save user input and time
    var time = moment().format("hA");
    var userInput = document.querySelector(".user-input");
    // save to localStorage
    localStorage.setItem("event", JSON.stringify({ time: time, event: userInput }));
    // Alert user that items have been saved to localStorage.
    var localStorageAlert = document.getElementById("alert");
    localStorageAlert.innerText = "Event saved to local storage '\u2713'";
    // create some kind of timeOut value that removes the notification
    $("#alert").fadeOut("slow");
  });

  // create time updater function()
  // get current time

  // create our loop to go over all the time blocks (rows)  -  each row has id indicating which hour

  // if else if statement to:
  // ().removeClass
  // check to see if we have passed our time
  // check out removeClass and addClass
  // check to see if current hour (current time var) matches physcial hour (ids)

  // check to see if the times is in the future

  // Retrieve localStorage and render items to the correct rows    // could copy paste 10 times if one row works
});
