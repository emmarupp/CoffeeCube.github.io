let firstSlider = document.getElementById("panel1");
let slideCont = document.getElementById("allSlides");
let panelArray = document.querySelectorAll(".slide")
let allFirstRow = document.querySelectorAll(".slideFirstRow")
let allSecondRow = document.querySelectorAll(".slideSecondRow")
let allThirdRow = document.querySelectorAll(".slideThirdRow");

let prevButton = document.getElementById("prevButton");
let nextButton = document.getElementById("nextButton");

let imageWidth = firstSlider.clientWidth;
let imageMargin;

counterPanel = 0;
let currentMargin = 0;
let maxSlideClicks;
if(window.innerWidth < 481){
    console.log("Is Mobile");
    maxSlideClicks = 4;
    imageMargin = window.innerWidth/10;
}
else{
    console.log("Is not Mobile")
    maxSlideClicks = 2;
    imageMargin = window.innerWidth/20;
}

prevButton.addEventListener("click", function e(){
    if(counterPanel > 0){
        counterPanel -=1;
        console.log("Previous Image display");
        console.log(firstSlider.style.marginLeft);
        currentMargin = -(counterPanel * (imageWidth + imageMargin)) + "px"; 
        console.log("current Margin: " + currentMargin);   
        slideCont.style.marginLeft = currentMargin;
    }
    else{
        console.log("Already first IMG");
    }
    console.log("Margin: " + imageMargin);
});

nextButton.addEventListener("click", function f(){
    if(counterPanel < maxSlideClicks){
        counterPanel +=1;
        console.log("Next Image display");
        console.log(firstSlider.style.marginLeft);
        currentMargin = -(counterPanel * (imageWidth + imageMargin)) + "px"; 
        console.log("current Margin: " + currentMargin);   
        slideCont.style.marginLeft = currentMargin;
    }
    else{
        console.log("Already last IMG");
    }
    console.log("Margin: " + imageMargin);
});

for (let i = 0; i < panelArray.length; i++) {
    panelArray[i].addEventListener("mouseenter", function e(){
        allFirstRow[i].style.marginTop = "25px";
        allSecondRow[i].style.marginTop = "8px";
        allThirdRow[i].style.marginTop = "8px";
        slideCont.style.paddingBottom = "0px";
        console.log("clicked at " + i);
    });
    panelArray[i].addEventListener("mouseleave", function e(){
        allFirstRow[i].style.marginTop = "20px";
        allSecondRow[i].style.marginTop = "3px";
        allThirdRow[i].style.marginTop = "3px";
        slideCont.style.paddingBottom = "15px";
        console.log("clicked at " + i);
    });
    console.log(i);
}

window.addEventListener("resize", (event) => {
    mageWidth = firstSlider.clientWidth;
    if(window.innerWidth < 481){
        console.log("Is Mobile");
        maxSlideClicks = 4;
        imageMargin = window.innerWidth/10;
    }
    else{
        console.log("Is not Mobile")
        maxSlideClicks = 2;
        imageMargin = window.innerWidth/20;
    }
});