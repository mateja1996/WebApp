// SLIDER

fetch("./imagePaths.json")
    .then((data) => data.json())
    .then((success) => imagePaths(success));
function imagePaths(success) {
    localStorage.setItem("podaci", JSON.stringify(success));
    let path = success[0].path;
    let comment = success[0].comment;
    let person = success[0].person;
    let personInfo = success[0].personInfo;

    document.getElementById("testimonial").innerHTML = comment;

    const img = document.getElementById("img");
    let pic = document.createElement("IMG");
    pic.setAttribute("src", path);
    pic.setAttribute("alt", "x");
    att = document.createAttribute("style");
    att.value = "border-radius: 50%";
    pic.setAttributeNode(att);
    img.appendChild(pic);

    document.getElementById("name").innerHTML = person;

    document.getElementById("info").innerHTML = personInfo;

    document.getElementById("dot1").style.transform = "scale(1.5)";
    document.getElementById("dot1").style.opacity = "100%";

    document.getElementById("nazad").style.opacity = "50%";
}

localStorage.setItem("broj", 0);

let napredDugme = document.getElementById("napred");
napredDugme.addEventListener("click", function () {
    let izvadjeniPodaci = JSON.parse(localStorage.getItem("podaci"));

    let duzina = izvadjeniPodaci.length;

    let redniBrojString = localStorage.getItem("broj");
    let redniBroj = parseInt(redniBrojString);

    if (redniBroj + 2 == duzina) {
        document.getElementById("napred").style.opacity = "50%";
    } else {
        document.getElementById("nazad").style.opacity = "100%";
    }
    if (redniBroj + 1 < duzina) {
        document.getElementById("testimonial").innerHTML = "";
        document.getElementById("img").innerHTML = "";
        document.getElementById("name").innerHTML = "";
        document.getElementById("info").innerHTML = "";
        localStorage.setItem("broj", parseInt(redniBroj) + 1);
        let i = redniBroj + 1;
        let path = izvadjeniPodaci[i].path;
        let comment = izvadjeniPodaci[i].comment;
        let person = izvadjeniPodaci[i].person;
        let personInfo = izvadjeniPodaci[i].personInfo;

        document.getElementById("testimonial").innerHTML = comment;

        const img = document.getElementById("img");
        let pic = document.createElement("IMG");
        pic.setAttribute("src", path);
        pic.setAttribute("alt", "x");
        att = document.createAttribute("style");
        att.value = "border-radius: 50%";
        pic.setAttributeNode(att);
        img.appendChild(pic);

        document.getElementById("name").innerHTML = person;
        document.getElementById("info").innerHTML = personInfo;

        let opseg = duzina / 3;

        if (i + 1 < opseg) {
            document.getElementById("dot1").style.transform = "scale(1.5)";
            document.getElementById("dot1").style.opacity = "100%";
            document.getElementById("dot2").style.transform = "scale(1)";
            document.getElementById("dot2").style.opacity = "50%";
            document.getElementById("dot3").style.transform = "scale(1)";
            document.getElementById("dot3").style.opacity = "50%";
        }

        if (i + 1 <= 2 * opseg && i >= opseg) {
            document.getElementById("dot2").style.transform = "scale(1.5)";
            document.getElementById("dot2").style.opacity = "100%";
            document.getElementById("dot1").style.transform = "scale(1)";
            document.getElementById("dot1").style.opacity = "50%";
            document.getElementById("dot3").style.transform = "scale(1)";
            document.getElementById("dot3").style.opacity = "50%";
        }

        if (i + 1 > 2 * opseg) {
            document.getElementById("dot3").style.transform = "scale(1.5)";
            document.getElementById("dot3").style.opacity = "100%";
            document.getElementById("dot1").style.transform = "scale(1)";
            document.getElementById("dot1").style.opacity = "50%";
            document.getElementById("dot2").style.transform = "scale(1)";
            document.getElementById("dot2").style.opacity = "50%";
        }
    }
});

let nazadDugme = document.getElementById("nazad");
nazadDugme.addEventListener("click", function () {
    let izvadjeniPodaci = JSON.parse(localStorage.getItem("podaci"));

    let duzina = izvadjeniPodaci.length;

    let redniBrojSring = localStorage.getItem("broj");
    let redniBroj = parseInt(redniBrojSring);

    if (redniBroj == 1) {
        document.getElementById("nazad").style.opacity = "50%";
    } else {
        document.getElementById("napred").style.opacity = "100%";
    }
    if (redniBroj > 0) {
        document.getElementById("testimonial").innerHTML = "";
        document.getElementById("img").innerHTML = "";
        document.getElementById("name").innerHTML = "";
        document.getElementById("info").innerHTML = "";
        localStorage.setItem("broj", parseInt(redniBroj) - 1);
        let i = redniBroj - 1;
        let path = izvadjeniPodaci[i].path;
        let comment = izvadjeniPodaci[i].comment;
        let person = izvadjeniPodaci[i].person;
        let personInfo = izvadjeniPodaci[i].personInfo;

        document.getElementById("testimonial").innerHTML = comment;

        const img = document.getElementById("img");
        let pic = document.createElement("IMG");
        pic.setAttribute("src", path);
        pic.setAttribute("alt", "x");
        att = document.createAttribute("style");
        att.value = "border-radius: 50%";
        pic.setAttributeNode(att);
        img.appendChild(pic);

        document.getElementById("name").innerHTML = person;
        document.getElementById("info").innerHTML = personInfo;

        let opseg = duzina / 3;

        if (i < opseg) {
            document.getElementById("dot1").style.transform = "scale(1.5)";
            document.getElementById("dot1").style.opacity = "100%";
            document.getElementById("dot2").style.transform = "scale(1)";
            document.getElementById("dot2").style.opacity = "50%";
            document.getElementById("dot3").style.transform = "scale(1)";
            document.getElementById("dot3").style.opacity = "50%";
        }
        if (i <= 2 * opseg && i >= opseg) {
            document.getElementById("dot2").style.transform = "scale(1.5)";
            document.getElementById("dot2").style.opacity = "100%";
            document.getElementById("dot1").style.transform = "scale(1)";
            document.getElementById("dot1").style.opacity = "50%";
            document.getElementById("dot3").style.transform = "scale(1)";
            document.getElementById("dot3").style.opacity = "50%";
        }
        if (i > 2 * opseg) {
            document.getElementById("dot3").style.transform = "scale(1.5)";
            document.getElementById("dot3").style.opacity = "100%";
            document.getElementById("dot1").style.transform = "scale(1)";
            document.getElementById("dot1").style.opacity = "50%";
            document.getElementById("dot2").style.transform = "scale(1)";
            document.getElementById("dot2").style.opacity = "50%";
        }
    }
});

// SHOW/HIDE CORE CAPABILITIES TEXT

let hrWater = document.getElementById("hrWater");
let textWater = document.getElementById("textWater");

hrWater.style.display = "none";
textWater.style.display = "none";

let toogleWater = document.getElementById("toogleWater");

toogleWater.addEventListener("click", function () {
    let plusImg = document.createElement("img");
    plusImg.setAttribute("src", "/img/plus.svg");
    plusImg.setAttribute("alt", "x");

    let minusImg = document.createElement("img");
    minusImg.setAttribute("src", "/img/minus.svg");
    minusImg.setAttribute("alt", "x");
    if (window.getComputedStyle(hrWater).display === "none") {
        hrWater.style.display = "block";
        textWater.style.display = "block";

        toogleWater.innerHTML = "";
        toogleWater.appendChild(minusImg);
    } else {
        hrWater.style.display = "none";
        textWater.style.display = "none";

        toogleWater.innerHTML = "";
        toogleWater.appendChild(plusImg);
    }
});

let hrGas = document.getElementById("hrGas");
let textGas = document.getElementById("textGas");

hrGas.style.display = "none";
textGas.style.display = "none";

let toogleGas = document.getElementById("toogleGas");

toogleGas.addEventListener("click", function () {
    let plusImg = document.createElement("img");
    plusImg.setAttribute("src", "/img/plus.svg");
    plusImg.setAttribute("alt", "x");

    let minusImg = document.createElement("img");
    minusImg.setAttribute("src", "/img/minus.svg");
    minusImg.setAttribute("alt", "x");
    if (window.getComputedStyle(hrGas).display === "none") {
        hrGas.style.display = "block";
        textGas.style.display = "block";

        toogleGas.innerHTML = "";
        toogleGas.appendChild(minusImg);
    } else {
        hrGas.style.display = "none";
        textGas.style.display = "none";

        toogleGas.innerHTML = "";
        toogleGas.appendChild(plusImg);
    }
});

// DESKTOP HEADER DROPDOWN

let divisionsDropdown = document.getElementById("divisionsDropdown");

divisionsDropdown.style.display = "none";

let ourDivisons = document.getElementById("ourDivisons");
let toogleDivisionsDesktop = document.getElementById("toogleDivisionsDesktop");

ourDivisons.addEventListener("click", function () {
    if (window.getComputedStyle(divisionsDropdown).display === "none") {
        divisionsDropdown.style.display = "block";
        investorsDropdown.style.display = "none";
        toogleDivisionsDesktop.style.transform = "scaleY(-1)";
        toogleInvestorsDesktop.style.transform = "scaleY(1)";
    } else {
        divisionsDropdown.style.display = "none";
        toogleDivisionsDesktop.style.transform = "scaleY(1)";
    }
});

let investorsDropdown = document.getElementById("investorsDropdown");

investorsDropdown.style.display = "none";

let investors = document.getElementById("investors");
let toogleInvestorsDesktop = document.getElementById("toogleInvestorsDesktop");

investors.addEventListener("click", function () {
    if (window.getComputedStyle(investorsDropdown).display === "none") {
        investorsDropdown.style.display = "block";
        divisionsDropdown.style.display = "none";
        toogleInvestorsDesktop.style.transform = "scaleY(-1)";
        toogleDivisionsDesktop.style.transform = "scaleY(1)";
    } else {
        investorsDropdown.style.display = "none";
        toogleInvestorsDesktop.style.transform = "scaleY(1)";
    }
});

// MOBILE HEADER DROPDOWN AND SANDWICH BTN
let selectDivisions = document.getElementById("selectDivisions");
let selectInvestors = document.getElementById("selectInvestors");

let hrDivisions = document.getElementById("hrDivisions");
let textDivisions = document.getElementById("textDivisions");

textDivisions.style.display = "none";

let toogleDivisions = document.getElementById("toogleDivisions");

selectDivisions.addEventListener("click", function () {
    if (window.getComputedStyle(textDivisions).display === "none") {
        textDivisions.style.display = "block";
        toogleDivisions.style.transform = "scaleY(-1)";
        textInvestors.style.display = "none";
        toogleInvestors.style.transform = "scaleY(1)";
    } else {
        textDivisions.style.display = "none";
        toogleDivisions.style.transform = "scaleY(1)";
    }
});

let hrInvestors = document.getElementById("hrInvestors");
let textInvestors = document.getElementById("textInvestors");

textInvestors.style.display = "none";

let toogleInvestors = document.getElementById("toogleInvestors");

selectInvestors.addEventListener("click", function () {
    if (window.getComputedStyle(textInvestors).display === "none") {
        textInvestors.style.display = "block";
        toogleInvestors.style.transform = "scaleY(-1)";
        textDivisions.style.display = "none";
        toogleDivisions.style.transform = "scaleY(1)";
    } else {
        textInvestors.style.display = "none";
        toogleInvestors.style.transform = "scaleY(1)";
    }
});

// sandwich btn
let sandwich = document.getElementById("sandwich");
let sandwichPressed = document.getElementById("sandwichPressed");

sandwichPressed.style.display = "none";

sandwich.addEventListener("click", function () {
    let closeImg = document.createElement("img");
    closeImg.setAttribute("src", "/img/close.svg");
    closeImg.setAttribute("alt", "x");

    let openImg = document.createElement("img");
    openImg.setAttribute("src", "/img/menu.svg");
    openImg.setAttribute("alt", "x");

    if (window.getComputedStyle(sandwichPressed).display === "none") {
        sandwichPressed.style.display = "block";
        sandwich.innerHTML = "";
        sandwich.appendChild(closeImg);
    } else {
        sandwichPressed.style.display = "none";
        sandwich.innerHTML = "";
        sandwich.appendChild(openImg);
    }
});
