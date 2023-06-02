let leaderboard = []; //Create leaderboard array

function addToLeaderboard() {
    //Create Name and Score variables
    const name = document.getElementById("name").value;
    const score = counter;
    //Push name and score to leaderboard and sort by lowest score
    leaderboard.push({ name, score });
    leaderboard.sort((a, b) => a.score - b.score);
    //Converts a JavaScript value to a JavaScript Object Notation (JSON) string and stores it in local storage
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
    console.log(leaderboard); // check the leaderboard array
    window.location.href = "leaderboard.HTML";
  }
  // Displays the newly added name and score
function displayLeaderboard() {
 console.log("displayLeaderboard called"); // check if the function is called
  let leaderboardTable = document.getElementById("leaderboardTable");
  let html = "<tr><th>Name</th><th>Score</th></tr>";
  for (let i = 0; i < leaderboard.length; i++) {
    const name = leaderboard[i].name;
    const score = leaderboard[i].score;
    html += `<tr><td>${name}</td><td>${score}</td></tr>`;
  }
  leaderboardTable.innerHTML = html;
}
//Check if there is anything in the leaderboard array
if (localStorage.getItem("leaderboard")) {
  leaderboard = JSON.parse(localStorage.getItem("leaderboard"));
  console.log(leaderboard); // check the leaderboard array
  displayLeaderboard();
}
//Clear leaderboard
function clearLeaderboard() {
    leaderboard = [];
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
    displayLeaderboard();
  }
