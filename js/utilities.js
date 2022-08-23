function nomore() {
  const list = document.querySelector(".list");
  const listLi = list.getElementsByTagName("li");
  const listLength = listLi.length;
  if (listLength > 4) {
    alert("You can not select more.");
    script.stop;
  }
}

function player(playerName) {
  nomore();
  const list = document.getElementById("demo");
  const entry = document.createElement("li");
  entry.innerText = playerName;
  list.appendChild(entry);
}