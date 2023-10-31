document.getElementById("inputForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const numberInput = parseInt(document.getElementById("numberInput").value);
  evaluateNumber(numberInput);
});

function evaluateNumber(n) {
  if (n % 2 !== 0) {
      document.getElementById("result").textContent = "Weird";
  } else {
      if (n >= 2 && n <= 5) {
          document.getElementById("result").textContent = "Not Weird";
      } else if (n >= 6 && n <= 20) {
          document.getElementById("result").textContent = "Weird";
      } else {
          document.getElementById("result").textContent = "Not Weird";
      }
  }
}
