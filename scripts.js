function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error(`Élément avec l'ID ${elementId} non trouvé.`);
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
const link4 = document.getElementById("link4");

link1.addEventListener('click', (e) => {
    e.preventDefault();
    scrollToElement('competences');
});

link2.addEventListener('click', (e) => {
    e.preventDefault();
    scrollToElement('projets');
});

link3.addEventListener('click', (e) => {
    e.preventDefault();
    scrollToElement('experiences');
});

link4.addEventListener('click', (e) => {
    e.preventDefault();
    scrollToElement('contact');
});

function Kibajobs() {
    var url = "https://kibajobs.com/";
    window.open(url, "_blank");
}

function Subway() {
    var url = "https://www.pagesjaunes.fr/pros/54465395";
    window.open(url, "_blank");
}
function coeurdenature() {
    var url = "https://coeur2nature.ma/";
    window.open(url, "_blank");
}

function sixquiprends() {
    var url = "https://github.com/rafikApp/6-qui-prend";
    window.open(url, "_blank");
}

function Démineur() {
    var url = "https://github.com/rafikApp/Jeu-de-Mines";
    window.open(url, "_blank");
}

function Memory() {
    var url = "https://github.com/rafikApp/Jeu-Memory";
    window.open(url, "_blank");
}

function Bowling() {
    var url = "https://www.google.com/";
    window.open(url, "_blank");
}

function Lapin() {
    var url = "https://github.com/rafikApp/Modelisation-Lapin";
    window.open(url, "_blank");
}

function Grid() {
    var url = "https://github.com/rafikApp/Grid-Path";
    window.open(url, "_blank");
}

function Contact() {
    var url = "https://github.com/rafikApp/Gestion-de-contact";
    window.open(url, "_blank");
}

function Processus() {
    var url = "https://github.com/rafikApp/Gestion-de-processus";
    window.open(url, "_blank");
}

function linkedin() {
    var url = "https:www.linkedin.com/in/hiba-iggout-362308234";
    window.open(url, "_blank");
}

function github() {
    var url = "https://github.com/rafikApp";
    window.open(url, "_blank");
}

function Graphes() {
    var url = "https://github.com/rafikApp/Graphe-k-quasi-cliques-";
    window.open(url, "_blank");
}

function Formation() {
    var url = "https://github.com/rafikApp/Site-de-Formation";
    window.open(url, "_blank");
} 