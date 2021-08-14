// Create our document ready function to make sure nothing runs before we load the page.
$(document).ready(function () {
  // All of our code is ran in here

  var saveButton9 = $("#save-button-9");
  var saveButton10 = $("#save-button-10");
  var saveButton11 = $("#save-button-11");
  var saveButton12 = $("#save-button-12");
  var saveButton1 = $("#save-button-1");
  var saveButton2 = $("#save-button-2");
  var saveButton3 = $("#save-button-3");
  var saveButton4 = $("#save-button-4");
  var saveButton5 = $("#save-button-5");

  // 9AM FUNCTION: listen for click events on the page
  saveButton9.on("click", function (event) {
    event.preventDefault();
    // grab the saved event options
    //create variable to save user input and time
    var arr = [];
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

    // Alert user that items have been saved to localStorage.
    var localStorageAlert = document.getElementById("alert");
    localStorageAlert.innerText = "Event saved to local storage \u2713";
    // create some kind of timeOut value that removes the notification
    $("#alert").fadeIn("slow").delay(3000).fadeOut("slow");
  });

  // 11AM FUNCTION: listen for click events on the page
  saveButton11.on("click", function () {
    // grab the saved event options
    //create variable to save user input and time
    var time = 11;
    var arr = [];
    var userInput = document.querySelector(".user-input-11").value;
    console.log(userInput);
    // save to localStorage
    var existingEvents = JSON.parse(localStorage.getItem("allEvents"));
    if (existingEvents == null) existingEvents = [];
    var userPlannedEvent = { time: time, event: userInput };
    localStorage.setItem("events", JSON.stringify(userPlannedEvent));
    existingEvents.push(userPlannedEvent);
    localStorage.setItem("allEvents", JSON.stringify(existingEvents));

    // Alert user that items have been saved to localStorage.
    var localStorageAlert = document.getElementById("alert");
    localStorageAlert.innerText = "Event saved to local storage \u2713";
    // create some kind of timeOut value that removes the notification
    $("#alert").fadeIn("slow").delay(3000).fadeOut("slow");
  });

  // 12PM FUNCTION: listen for click events on the page
  saveButton12.on("click", function () {
    // grab the saved event options
    //create variable to save user input and time
    var time = 12;
    var arr = [];
    var userInput = document.querySelector(".user-input-12").value;
    console.log(userInput);
    // save to localStorage
    var existingEvents = JSON.parse(localStorage.getItem("allEvents"));
    if (existingEvents == null) existingEvents = [];
    var userPlannedEvent = { time: time, event: userInput };
    localStorage.setItem("events", JSON.stringify(userPlannedEvent));
    existingEvents.push(userPlannedEvent);
    localStorage.setItem("allEvents", JSON.stringify(existingEvents));

    // Alert user that items have been saved to localStorage.
    var localStorageAlert = document.getElementById("alert");
    localStorageAlert.innerText = "Event saved to local storage \u2713";
    // create some kind of timeOut value that removes the notification
    $("#alert").fadeIn("slow").delay(3000).fadeOut("slow");
  });

  // 1PM FUNCTION: listen for click events on the page
  saveButton1.on("click", function () {
    // grab the saved event options
    //create variable to save user input and time
    var time = 1;
    var arr = [];
    var userInput = document.querySelector(".user-input-1").value;
    console.log(userInput);
    // save to localStorage
    var existingEvents = JSON.parse(localStorage.getItem("allEvents"));
    if (existingEvents == null) existingEvents = [];
    var userPlannedEvent = { time: time, event: userInput };
    localStorage.setItem("events", JSON.stringify(userPlannedEvent));
    existingEvents.push(userPlannedEvent);
    localStorage.setItem("allEvents", JSON.stringify(existingEvents));

    // Alert user that items have been saved to localStorage.
    var localStorageAlert = document.getElementById("alert");
    localStorageAlert.innerText = "Event saved to local storage \u2713";
    // create some kind of timeOut value that removes the notification
    $("#alert").fadeIn("slow").delay(3000).fadeOut("slow");
  });

  // 2PM FUNCTION: listen for click events on the page
  saveButton2.on("click", function () {
    // grab the saved event options
    //create variable to save user input and time
    var time = 2;
    var arr = [];
    var userInput = document.querySelector(".user-input-2").value;
    console.log(userInput);
    // save to localStorage
    var existingEvents = JSON.parse(localStorage.getItem("allEvents"));
    if (existingEvents == null) existingEvents = [];
    var userPlannedEvent = { time: time, event: userInput };
    localStorage.setItem("events", JSON.stringify(userPlannedEvent));
    existingEvents.push(userPlannedEvent);
    localStorage.setItem("allEvents", JSON.stringify(existingEvents));

    // Alert user that items have been saved to localStorage.
    var localStorageAlert = document.getElementById("alert");
    localStorageAlert.innerText = "Event saved to local storage \u2713";
    // create some kind of timeOut value that removes the notification
    $("#alert").fadeIn("slow").delay(3000).fadeOut("slow");
  });

  // 3PM FUNCTION: listen for click events on the page
  saveButton3.on("click", function () {
    // grab the saved event options
    //create variable to save user input and time
    var time = 3;
    var arr = [];
    var userInput = document.querySelector(".user-input-3").value;
    console.log(userInput);
    // save to localStorage
    var existingEvents = JSON.parse(localStorage.getItem("allEvents"));
    if (existingEvents == null) existingEvents = [];
    var userPlannedEvent = { time: time, event: userInput };
    localStorage.setItem("events", JSON.stringify(userPlannedEvent));
    existingEvents.push(userPlannedEvent);
    localStorage.setItem("allEvents", JSON.stringify(existingEvents));

    // Alert user that items have been saved to localStorage.
    var localStorageAlert = document.getElementById("alert");
    localStorageAlert.innerText = "Event saved to local storage \u2713";
    // create some kind of timeOut value that removes the notification
    $("#alert").fadeIn("slow").delay(3000).fadeOut("slow");
  });

  // 4PM FUNCTION: listen for click events on the page
  saveButton4.on("click", function () {
    // grab the saved event options
    //create variable to save user input and time
    var time = 4;
    var arr = [];
    var userInput = document.querySelector(".user-input-4").value;
    console.log(userInput);
    // save to localStorage
    var existingEvents = JSON.parse(localStorage.getItem("allEvents"));
    if (existingEvents == null) existingEvents = [];
    var userPlannedEvent = { time: time, event: userInput };
    localStorage.setItem("events", JSON.stringify(userPlannedEvent));
    existingEvents.push(userPlannedEvent);
    localStorage.setItem("allEvents", JSON.stringify(existingEvents));

    // Alert user that items have been saved to localStorage.
    var localStorageAlert = document.getElementById("alert");
    localStorageAlert.innerText = "Event saved to local storage \u2713";
    // create some kind of timeOut value that removes the notification
    $("#alert").fadeIn("slow").delay(3000).fadeOut("slow");
  });

  // 5PM FUNCTION: listen for click events on the page
  saveButton5.on("click", function () {
    // grab the saved event options
    //create variable to save user input and time
    var time = 5;
    var arr = [];
    var userInput = document.querySelector(".user-input-5").value;
    console.log(userInput);
    // save to localStorage
    var existingEvents = JSON.parse(localStorage.getItem("allEvents"));
    if (existingEvents == null) existingEvents = [];
    var userPlannedEvent = { time: time, event: userInput };
    localStorage.setItem("events", JSON.stringify(userPlannedEvent));
    existingEvents.push(userPlannedEvent);
    localStorage.setItem("allEvents", JSON.stringify(existingEvents));

    // Alert user that items have been saved to localStorage.
    var localStorageAlert = document.getElementById("alert");
    localStorageAlert.innerText = "Event saved to local storage \u2713";
    // create some kind of timeOut value that removes the notification
    $("#alert").fadeIn("slow").delay(3000).fadeOut("slow");
  });

  // create time updater function()
  // get current time
  var currentDay = moment().format("dddd, MMMM Do");
  document.getElementById("currentDay").innerText = currentDay;

  var currentTime = moment().format("h A");
  // create our loop to go over all the time blocks (rows)  -  each row has id indicating which hour
  var timeArr = [9, 10, 11, 12, 13, 14, 15, 16, 17];
  var timeActHour = parseInt(moment().format("H"));
  //   for()
  console.log("here");
  for (var i = 0; i < timeArr.length; i++) {
    var convertString = timeArr[i].toString();
    if (timeArr[i] == timeActHour) {
      document.getElementById(convertString).classList.add("present");
    } else if (timeArr[i] > timeActHour) {
      document.getElementById(convertString).classList.add("future");
    } else {
      document.getElementById(convertString).classList.add("past");
    }
  }
  console.log("end");
  // if else if statement to:
  // ().removeClass
  // check to see if we have passed our time
  // check out removeClass and addClass
  // check to see if current hour (current time var) matches physcial hour (ids)
  // check to see if the times is in the future

  // Retrieve localStorage and render items to the correct rows    // could copy paste 10 times if one row works
  var localStorageArr = JSON.parse(localStorage.getItem("allEvents"));
  console.log(localStorageArr[0].time);
  for (var j = 0; j < localStorageArr.length; j++) {
    if (localStorageArr[j].time == 9) {
      document.getElementById(9).innerText = localStorageArr[j].event;
    } else if (localStorageArr[j].time == 10) {
      document.getElementById(10).innerText = localStorageArr[j].event;
    } else if (localStorageArr[j].time == 11) {
      document.getElementById(11).innerText = localStorageArr[j].event;
    } else if (localStorageArr[j].time == 12) {
      document.getElementById(12).innerText = localStorageArr[j].event;
    }
  }
});
