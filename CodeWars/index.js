function checkString() {
    const str = document.getElementById("stringInput").value;  
    const isAllCaps = str.toUpperCase() === str;  
    const result = document.getElementById("result");
    result.innerHTML = isAllCaps ? "Yes, the string is all caps." : "No, the string is not all caps.";
  }
  