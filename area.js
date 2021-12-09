var baseLength = document.querySelector("#base-length");
var heightLength = document.querySelector("#height-length");
var areaButton = document.querySelector("#area-button");
var outputEl = document.querySelector("#output");

function calculateAreaTriangle( a, b){
    var AreaTriangle = 0.5*a*b;
    return AreaTriangle;
}
function calculateArea(){
    var base = baseLength.value;
    var height =heightLength.value;
    if(base<=0||height<=0)
    {
        outputEl.innerText=`length cannot be negative or zero`;
    }
    else{
    var newAreaTriangle = calculateAreaTriangle(Number(baseLength.value), Number(heightLength.value))
    outputEl.innerText = "The area of the triangle is " + newAreaTriangle
+" cm^2."
    }
}

areaButton.addEventListener("click", calculateArea);
