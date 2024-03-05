let estActive = localStorage.getItem("estActive") === "true";

function changeEtat() {
    estActive = !estActive;
    localStorage.setItem("estActive", estActive);
    updateStyles();
}

function updateStyles() {
    if (estActive) {
        document.documentElement.classList.add('active-mode');
    } else {
        document.documentElement.classList.remove('active-mode');
    }
}

updateStyles()