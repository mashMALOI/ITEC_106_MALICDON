document.getElementById("generateButton").addEventListener("click", generateFibonacci);

function generateFibonacci() {
    var numTerms = parseInt(document.getElementById("numTerms").value);
    var fibonacciSequence = "";

    if (isNaN(numTerms) || numTerms < 1 || numTerms >= 100) {
        alert("Please enter a valid integer less than 100.");
        return;
    }

    var a = 0, b = 1;
    for (var i = 0; i < numTerms; i++) {
        fibonacciSequence += a + ", ";
        var temp = a;
        a = b;
        b = temp + b;
    }

    document.getElementById("fibonacciSequence").textContent = "Fibonacci Sequence: " + fibonacciSequence.slice(0, -2); // Remove the last comma and space
}
