var flag = false;
var img = new Image(); 
img.src = 'image.jpg' 

function nevbekuldes() {
    var name = document.getElementById("name").value;
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var display = document.getElementById("display");
    display.innerHTML = `Üdvözöllek ` + lname + ` ` + name + ` ` + fname + `!`;
    display.style.display = "inline";
}

function kapcsolo() {
    var bekeres = document.getElementById("bekeres");
    if (flag == false) {
        flag = true;
        bekeres.style.display = "block";
    } else {
        flag = false;
        bekeres.style.display = "none";
        display.style.display = "none";
    }
}

function rndrgb() {
    let rgb = "rgb(" +
    (Math.floor(Math.random() * 256) + 1) +
    "," + (Math.floor(Math.random() * 256) + 1) +
    "," + (Math.floor(Math.random() * 256) + 1) +
    ")";
    return rgb;
}

function image() {
    var testbox = document.getElementsByClassName("testbox")[0];
    testbox.style.backgroundColor = rndrgb();
};

function myevent() {
    var ev = document.createEvent("MouseEvent");
    ev.initMouseEvent("mouseover", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    document.getElementsByClassName("testbox")[0].dispatchEvent(ev);
};

window.onload = function() {
    console.log("Az oldal betöltődött !");
    display.style.display = "none";
    var container = document.getElementsByClassName("image")[0];
    container.appendChild(img);
    var test1st = document.querySelector(".testbox");
    test1st.style.fontSize = "16px";
    test1st.style.border = "12px solid black";
    test1st.style.fontFamily = "Courier New";
};
