// Retrieve the counter value from local storage
var counter = localStorage.getItem("counter");
// If the counter value is not in local storage, set it to 0
if (!counter) {
  counter = 0;
  document.getElementById("counter").innerHTML = counter;
}
document.getElementById("counter").innerHTML = counter;

function riddleOneAnswer(event) {
  event.preventDefault(); // prevent form submission
  var input = document.getElementById("guess").value;
  if (input.trim() === "Promise" || input.trim() === "promise" || input.trim() === "Heart" || input.trim() === "heart") {
    // Increment the counter
    counter++;
    // Store the updated counter value in local storage
    localStorage.setItem("counter", counter);
    document.getElementById("displayArea").innerHTML = "That's correct";
    document.getElementById("counter").innerHTML = counter;
    document.getElementById("guess").value = "";
    $('#myModal').modal('show'); // show the modal
    document.getElementById("score").innerHTML = counter;
  } else {
    // Increment the counter
    counter++;
    // Store the updated counter value in local storage
    localStorage.setItem("counter", counter);
    document.getElementById("displayArea").innerHTML = "That's incorrect";
    document.getElementById("counter").innerHTML = counter;
    document.getElementById("guess").value = "";
  }
}

function riddleTwoAnswer(event) {
    event.preventDefault(); // prevent form submission
    var input = document.getElementById("guess").value;
    if (input.trim() === "Candle" || input.trim() === "candle") {
      // Increment the counter
      counter++;
      // Store the updated counter value in local storage
      localStorage.setItem("counter", counter);
      document.getElementById("displayArea").innerHTML = "That's correct";
      document.getElementById("counter").innerHTML = counter;
      document.getElementById("guess").value = "";
      $('#myModal').modal('show'); // show the modal
      document.getElementById("score").innerHTML = counter;
    } else {
      // Increment the counter
      counter++;
      // Store the updated counter value in local storage
      localStorage.setItem("counter", counter);
      document.getElementById("displayArea").innerHTML = "That's incorrect";
      document.getElementById("counter").innerHTML = counter;
      document.getElementById("guess").value = "";
    }
  }

  function riddleThreeAnswer(event) {
    event.preventDefault(); // prevent form submission
    var input = document.getElementById("guess").value;
    if (input.trim() === "Sponge" || input.trim() === "sponge") {
      // Increment the counter
      counter++;
      // Store the updated counter value in local storage
      localStorage.setItem("counter", counter);
      document.getElementById("displayArea").innerHTML = "That's correct";
      document.getElementById("counter").innerHTML = counter;
      document.getElementById("score").innerHTML = counter;
      document.getElementById("guess").value = "";
      $('#myModal').modal('show'); // show the modal
      document.getElementById("score").innerHTML = counter;
    } else {
      // Increment the counter
      counter++;
      // Store the updated counter value in local storage
      localStorage.setItem("counter", counter);
      document.getElementById("displayArea").innerHTML = "That's incorrect";
      document.getElementById("counter").innerHTML = counter;
      document.getElementById("guess").value = "";
    }
  }

function resetCounter() {
    // Clear the counter value from local storage
    localStorage.removeItem("counter");
    // Set the displayed value to 0
    document.getElementById("counter").innerHTML = 0;
}

function moveToRiddleTwo() {
    window.location.href = "riddle2.HTML";
    document.getElementById("counter").innerHTML = counter;
}

function moveToRiddleThree() {
    window.location.href = "riddle3.HTML";
    document.getElementById("counter").innerHTML = counter;
}
// Shows hint when button is pressed
function showText() {
  document.getElementById("hint").style.display = "block";
  counter ++;
  // Store the updated counter value in local storage
  localStorage.setItem("counter", counter);
  document.getElementById("counter").innerHTML = counter;
}