let inpEnter = document.querySelector(".mini");
let inpAnswer = document.querySelector(".answer");

let interBtn = (par) => {
    inpEnter.value += par;
};

let resltNum = () => {
    let answer = eval(inpEnter.value);
    let length = inpEnter.value.length;

    if (length < 11) {
        inpAnswer.style.fontSize = "45px";
    }
    if (length > 12) {
        inpAnswer.style.fontSize = "35px";
    }
    if (length > 16) {
        inpAnswer.style.fontSize = "24px";
    }

    if (answer % 1 == 0) {
        inpAnswer.value = answer;
    } else {
        inpAnswer.value = answer.toFixed(6);
    }
    inpEnter.value = "";
    if (inpAnswer.value === "Infinity") {
        inpAnswer.value = "You can't devide by 0";
        inpAnswer.style.fontSize = "20px";
        inpAnswer.style.color = "red";
    }
    if (inpAnswer.value === "undefined") {
        inpAnswer.value = "";
    }
};

let clearInp = () => {
    inpEnter.value = "";
    inpAnswer.value = "";
    inpAnswer.style.fontSize = "45px";
};
let delLast = () => {
    inpEnter.value = inpEnter.value.slice(0, -1);
};
