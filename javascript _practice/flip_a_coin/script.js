document.getElementById("flipBtn").addEventListener("click", function() {
  // Randomly decide Heads or Tails
  let isHeads = Math.random() < 0.5;
  
  let resultText = isHeads ? "Heads" : "Tails";
  document.getElementById("result").textContent = "You got: " + resultText;
  
  // Show coin image
  document.getElementById("coinImage").src = isHeads ? "heads.png" : "tails.png";
});
