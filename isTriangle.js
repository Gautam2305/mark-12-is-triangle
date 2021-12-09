var inputs= document.querySelectorAll(".angle-input");
var isTriangleBtn =document.querySelector("#is-triangle-btn");
var outputEl= document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3){
    var sumOfAngles = angle1 + angle2 + angle3 
    return sumOfAngles;
}
function isTriangle(){
    if(Number(inputs[0].value)<=0||Number(inputs[1].value)<=0||Number(inputs[2].value)<=0)
    {
        outputEl.innerText="angles cannot be negative or zero";
    }
    else
    {
    var sumOfAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value),Number(inputs[2].value))
    
    if (sumOfAngles === 180){
        
        outputEl.innerText="Yay!The angles form a triangle";
    }else{
        
        outputEl.innerText="Oops! The angles don't form a triangle";
    }
}
}


isTriangleBtn.addEventListener("click", isTriangle);

