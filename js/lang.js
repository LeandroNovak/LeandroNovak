const lang = {
    "en": "Computer Science Student at Federal University of Sao Carlos and Xamarin Developer.",
    "pt": "Cursando Bacharelado em Ciência da Computação na Universidade Federal de São Carlos de Desenvolvedor Mobile com Xamarin."
}

function load() {
    var userLang = (navigator.language || navigator.userLanguage).slice(0, 2);
    var texts = lang[userLang];
    updateTexts(texts);
}

function updateLanguage(userLang) {
    var texts = lang[userLang];
    updateTexts(texts);
}

function updateTexts(texts) {
    var bio = document.getElementById("bio");
    bio.firstChild.textContent = (texts != null) ? texts : lang["en"];
}

window.onload = load;