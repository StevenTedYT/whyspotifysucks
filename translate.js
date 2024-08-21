const translations = {
    'fr': {
        title: "Mmh pourquoi Spotify c'est de la merde?",
        elements:[
            "Le prix : C'est en fait l'une des plateformes de streaming les plus chères.",
            "Ils ne paient pas les petits artistes. Ce sont eux qui ont besoin d'argent pour améliorer leurs compétences/qualité et leurs stratégies de promotion.",
            "Le design est dépassé et nul (ça dépend des goûts, mais c'est mon avis perso).",
            "Tu dois payer pour voir les paroles d'une chanson (genre c'est sérieux ça ??)",
            "Afficher le nombre de streams influence si les gens écoutent une chanson ou non. On a tendance à penser que si une chanson n'a pas beaucoup de streams, elle doit être nulle, ce qui n'est pas forcément vrai. Quand les stats ne sont pas visibles, on écoute la musique sans idée préconçue et on se fait un avis basé sur la musique elle-même, pas sur ses statistiques.",
            "Les algorithmes sont pourris et manipulés par les grandes maisons de disques et les boîtes de pub comme Coca. Plus d'infos : <a href=\"https://youtu.be/NXBWkLjFHRQ?si=mubEi-vOd0r5_BMk&t=512\" target=\"_blank\">ici</a>",
            "Pas d'audio en qualité sans perte (Lossless Audio) pour l'instant, et tu devras peut-être payer en plus pour ça à l'avenir. [<a href=\"https://youtu.be/NXBWkLjFHRQ?si=mubEi-vOd0r5_BMk&t=512\" target=\"_blank\">source</a>]",
            "Pas de Dolby Atmos, alias Spatial Audio.",
            "Pas de clips vidéo.",
            "Pas de sets de DJ ou de concerts.",
            "Pas de synchronisation pour la musique locale (par exemple, si tu ajoutes de la musique, elle n'est pas automatiquement ajoutée sur tous tes appareils).",
            "Pas de playlists intelligentes (playlists automatiques personnalisées basées sur des règles que tu choisis).",
            "Géré par des gens qui bossent dans la pub, pas dans l'industrie musicale.",
            "Des royalties super basses pour les artistes (l'un des plus bas, d'ailleurs).",
            "Qualité audio médiocre (320 kbps max) ; Apple Music, Deezer, et Tidal offrent une bien meilleure qualité audio.",
            "Les artistes doivent payer pour synchroniser les paroles avec leur musique.",
            "Les artistes ne peuvent pitcher qu'un seul morceau par album, donc un seul morceau peut être mis en avant dans les playlists algorithmiques comme 'Discover Weekly' ou 'Release Radar'.",
            "Pas de cohérence du BPM ou de la tonalité dans le système de recommandations quand Spotify choisit la musique.",
            "Pas de vraie option de lecture aléatoire.",
            "La version gratuite n'est vraiment pas utilisable. Je comprends qu'ils doivent générer des revenus pour les artistes, mais il vaudrait peut-être mieux offrir uniquement une version premium. Les pubs, c'est une chose, mais beaucoup de fonctionnalités sont bloquées derrière un paywall.",
            "Les podcasts, c'est quoi ce délire ? C'est censé être une plateforme de musique, non ?"
        ]
    },
};  

function changeLanguage(lang) {
    document.documentElement.lang = lang;
    const elements = document.querySelectorAll('[key]');
    elements.forEach(element => {
      const key = element.getAttribute('key');
      if (translations[lang] && translations[lang][key]) {
        element.textContent = translations[lang][key];
      }
    });
}

function addTitle(content, lang) {
    const title = document.createElement('h1');
    title.textContent = translations[lang]['title'];
    content.appendChild(title);
}

function addElement(content, lang, key) {
    const elementKey = document.createElement('h3');
    elementKey.textContent = `${key}.`;
    content.appendChild(elementKey);

    const elementValue = document.createElement('p');
    elementValue.innerHTML = translations[lang]['elements'][key-1];
    content.appendChild(elementValue);
}

document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    const userLang = Object.keys(translations).find(lang => (navigator.language).includes(lang)) || 'en';
    if(userLang !== 'en') {
        content.innerHTML = '';
        setTimeout(() => {
            addTitle(content, userLang);
            for(let i = 1; i <= translations[userLang]['elements'].length; i++) {
                addElement(content, userLang, i);
            }
        }, 1000);
    }
});  