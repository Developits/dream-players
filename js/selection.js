document.getElementById("firstPlayer").addEventListener("click", function () {
  const playerName = "Lionel Messi";
  player(playerName);
  document.getElementById("firstPlayer").disabled = "true";
});
document.getElementById("secondPlayer").addEventListener("click", function () {
  const playerName = "Cristiano Ronaldo";
  player(playerName);
  document.getElementById("secondPlayer").disabled = "true";
});
document.getElementById("thirdPlayer").addEventListener("click", function () {
  const playerName = "Neymar Jr.";
  player(playerName);
  document.getElementById("thirdPlayer").disabled = "true";
});
document.getElementById("fourthPlayer").addEventListener("click", function () {
  const playerName = "Karim Benzema";
  player(playerName);
  document.getElementById("fourthPlayer").disabled = "true";
});
document.getElementById("fifthPlayer").addEventListener("click", function () {
  const playerName = "Kylian Mbappé";
  player(playerName);
  document.getElementById("fifthPlayer").disabled = "true";
});
document.getElementById("sixthPlayer").addEventListener("click", function () {
  const playerName = "Harry Kane";
  player(playerName);
  document.getElementById("sixthPlayer").disabled = "true";
});
