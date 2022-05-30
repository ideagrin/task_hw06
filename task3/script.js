function redLight() {
    document.querySelector('#red').style.background = "red";
}

function yellowLight() {
    document.querySelector('#yellow').style.background = "yellow";
}

function greenLight() {
    document.querySelector('#green').style.background = "green";
}

function reset() {
    document.querySelector('#red').style.background = "black";
    document.querySelector('#green').style.background = "black";
    document.querySelector('#yellow').style.background = "black";
}

document.querySelector('#green').addEventListener('click',
() => {
    reset();
    greenLight();
});

document.querySelector('#yellow').addEventListener('click',
() => {
    reset();
    yellowLight();
});

document.querySelector('#red').addEventListener('click',
() => {
    reset();
    redLight();
});
