var sides = document.querySelectorAll(".side-input");
var hypotenuseBtn = document.querySelector("#hypotenuse-btn");
var outputEl = document.querySelector("#output");

function calculateSumOfSquares(a, b) {
    var sumOfSquares = a ** 2 + b ** 2;
    return sumOfSquares;

}

function calculateHypotenuse() {
    if(Number(sides[0].value)<=0||Number(sides[1].value)<=0)
    {
        outputEl.innerText=`angles cannot be negative or zero`;
    }
    else{
    var sumOfSquares = calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value))
    var lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    outputEl.innerText = "Length of hypotenuse is " + lengthOfHypotenuse + "cm"
    }
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse)