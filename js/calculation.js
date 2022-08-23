document.getElementById("playertotal").addEventListener("click", function () {
  const playerPrice = document.getElementById("playerprice").value;
  const playerTotalPrice = document.getElementById("playertotalprice");
  const list = document.querySelector(".list");
  const listLi = list.getElementsByTagName("li");
  const listLength = listLi.length;
  playerTotalPrice.innerText = playerPrice * listLength;
});

document.getElementById("totalcost").addEventListener("click", function () {
  const managerFeestring = document.getElementById("managerfee").value;
  const managerFee = parseInt(managerFeestring);

  const couchfeestring = document.getElementById("couchfee").value;
  const couchFee = parseInt(couchfeestring);

  const playerTotal = document.getElementById("playertotalprice");
  const playerTotalCostString = playerTotal.innerText;
  const playerTotalCost = parseInt(playerTotalCostString);

  const totalcostPrice = document.getElementById("totalcostprice");
  totalcostPrice.innerText = managerFee + couchFee + playerTotalCost;
});
