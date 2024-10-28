let lButton = document.querySelector("#left-button");
let rButton = document.querySelector("#right-button");
let slider = Array.from(document.querySelectorAll("#opinions-wrapper > .opinion"));
let sliderWrapper = document.querySelector("#opinions-wrapper");
let previousElementCount = 0;
let elementsWidth = slider[0].getBoundingClientRect().width - 60;
let marginLeft = 0;

let oceniarze = [
    { img: "Viezh_Robert_image.png", fullName: "Viezh Robert", location: "Warsaw, Poland", rating: 4.5, opinion: "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best." },
    { img: "Yessica_Christy_image.png", fullName: "Yessica Christy", location: "Shanxi, China", rating: 4.5, opinion: "I like it because I like to travel far and still can connect with high speed." },
    { img: "Kim_Young_Jou_image.png", fullName: "Kim Young Jou", location: "Seoul, South Korea", rating: 4.5, opinion: "This is very unusual for my business that currently requires a virtual private network that has high security." },
    { img: "Yessica_Christy_image.png", fullName: "Lora Ipsum", location: "Nowosibirsk, Russia", rating: 3.2, opinion: "Nobody likes me and I feel bad about it." },
    { img: "Yessica_Christy_image.png", fullName: "Lora Litwichenko", location: "London, Great Britain", rating: 3.2, opinion: "Everybody likes me and I feel good about it." },
    { img: "Yessica_Christy_image.png", fullName: "Adam Nowak", location: "Powell, Moldova", rating: 2.2, opinion: "Nobody likes me and I feel bad about it." }
];

document.body.style.setProperty("--elementsWidth", elementsWidth+"px");

function defineCommentStructure(img, fullName, location, rating, opinion){
    let structure = `<div class="opinion">
        <div class="opinion-head">
            <img src="./images/`+img+`" alt="Profile Image">
            <div class="identity-data">
                <p class="fullName">`+fullName+`</p>
                <p class="localization">`+location+`</p>
            </div>
            <div class="rating"><p>`+rating+`<img src="./icons/rating_star-filled.png" alt="Rating Star"></p></div>
        </div>
        <div class="opinion-body">
            <p>`+opinion+`</p>
        </div>
    </div>`
}buttonBlock = false;

lButton.addEventListener("click", () => {
    if (!buttonBlock){
        previousElementCount -= 1;
        marginLeft = elementsWidth*previousElementCount;
        sliderWrapper.style.marginLeft = marginLeft + "px";
        console.log(marginLeft);
    }
});

rButton.addEventListener("click", () => {
    if (!buttonBlock){
        previousElementCount += 1;
        marginLeft = elementsWidth*previousElementCount;
        sliderWrapper.style.marginLeft = marginLeft + "px";
        console.log(marginLeft);
    }
});
