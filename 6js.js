let names = document.getElementsByTagName("h1")[0];

function change() {
    names.style.color = "red";
}

document.addEventListener("keyup", change);