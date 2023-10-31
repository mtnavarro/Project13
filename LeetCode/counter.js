function counter(n) {
    let currentCount = n;
    return function() {
      return currentCount++;
    };
  }
  
  const myCounter = counter(0);
  
  document.getElementById("increment-button").addEventListener("click", function() {
    const count = myCounter();
    document.getElementById("counter-display").innerHTML = count;
  });
  