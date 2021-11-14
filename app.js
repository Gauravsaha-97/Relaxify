const circleProgress = document.querySelector(".circle-progress");
const numberOfBreadth = document.querySelector(".breadth-input");
const start = document.querySelector(".start");
const instructions = document.querySelector(".instructions");
const breadthText = document.querySelector(".breadth-text");
let breadthLeft = 3;


numberOfBreadth.addEventListener("change", () => {
    breadthLeft = numberOfBreadth.value;
    breadthText.innerText = breadthLeft;
});


const growCircle = () => {
    circleProgress.classList.add("circle-grow");
    setTimeout(() => {
        circleProgress.classList.remove("circle-grow");
    }, 8000);
};


const breathTextUpdate = () => {
    breadthLeft = breadthLeft - 1;
    breadthText.innerText = breadthLeft;
    instructions.innerText = "Start Breathing in";
    setTimeout(() => {
        instructions.innerText = "Hold Breath";
        setTimeout(() => {
            instructions.innerText = "Exhale Slowly";
        }, 4000);
    }, 4000);
};


const breathingApp = () => {
    const breathingAnimtaion = setInterval(() => {
        if (breadthLeft === 0) {
            clearInterval(breathingAnimtaion);
            instructions.innerText =
                "You have completed your breathing session. Click 'Let's Begin' to start another session!";
            start.classList.remove("button-inactive");
            breadthLeft = numberOfBreadth.value;
            breadthText.innerText = breadthLeft;
            return;
        }
        growCircle();
        breathTextUpdate();
    }, 12000);
};


start.addEventListener("click", () => {
    start.classList.add("button-inactive");
    instructions.innerText = "Get relaxed, and start breathing slowly";
    setTimeout(() => {
        instructions.innerText = "Breathing is about to begin...";
        setTimeout(() => {
            breathingApp();
            growCircle();
            breathTextUpdate();
        }, 2000);
    }, 2000);
});

const items = document.querySelectorAll(".accordion a");

function toggleAccordion() {
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("active");
}

items.forEach((item) => item.addEventListener("click", toggleAccordion));