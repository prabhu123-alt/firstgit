
let bnt1 = document.getElementById("btn1");
let bnt2 = document.getElementById("btn2");
let pra1 = document.getElementById("pra1");
let pra2 = document.getElementById("pra2");
let input = document.getElementById("input");

function miter() {
    var inputs = parseInt(input.value);
    total = inputs * 1000;
    pra1.textContent = total;
};
bnt1.addEventListener("click", miter);

function cm() {
    var inputss = parseInt(input.value);
    total2 = inputss * 100000;
    pra2.textContent = total2;
};
bnt2.addEventListener("click", cm);
