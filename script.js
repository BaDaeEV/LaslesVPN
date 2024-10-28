let sliderEnabled = true;
let sliderWrapper = document.querySelector("#opinions-wrapper");
let slider = Array.from(document.querySelectorAll("#opinions-wrapper > .opinion"));
let elementsWidth = slider[0].getBoundingClientRect().width - 60;
document.body.style.setProperty("--elementsWidth", elementsWidth+"px");

function addEl(before = false) {
    slider = Array.from(document.querySelectorAll("#opinions-wrapper > .opinion"));
    if (before) {
        // Move the last element to the front
        let lastElement = slider.pop();
        sliderWrapper.insertBefore(lastElement, sliderWrapper.firstChild);
    } else {
        // Move the first element to the back
        let firstElement = slider.shift();
        sliderWrapper.appendChild(firstElement);
    }
}

document.querySelector("#left-button").addEventListener("click", () => {
    if (sliderEnabled) {
        sliderEnabled = false;
        const opinionsWrapper = document.querySelector("#opinions-wrapper");
        opinionsWrapper.style.transition = "none";
        opinionsWrapper.style.marginLeft = "-" + elementsWidth + "px";
        opinionsWrapper.style.transition = "all 3s";
        setTimeout(() => {
            opinionsWrapper.style.marginLeft = "0px";
            sliderEnabled = true;
            addEl(true);
        }, 300);
    }
});

document.querySelector("#right-button").addEventListener("click", () => {
    if (sliderEnabled) {
        sliderEnabled = false;
        const opinionsWrapper = document.querySelector("#opinions-wrapper");
        opinionsWrapper.style.transition = "none";
        opinionsWrapper.style.marginLeft = elementsWidth + "px";
        opinionsWrapper.style.transition = "all 3s";
        setTimeout(() => {
            opinionsWrapper.style.marginLeft = "0px";
            sliderEnabled = true;
            addEl();
        }, 300);
    }
});