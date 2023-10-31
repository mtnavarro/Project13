document.getElementById("inputForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const inputString = document.getElementById("inputString").value;
    const result = dedup(inputString);
    
    document.getElementById("result").textContent = result;
});

function dedup(s) {
    const stack = [];
    
    for (let char of s) {
        if (stack.length > 0 && stack[stack.length - 1] === char) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    
    return stack.join('');
}
