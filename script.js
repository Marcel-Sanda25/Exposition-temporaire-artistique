// Liste des images (mettre le nom exact des fichiers)
const images = [
    { src: "images/site4.png", discipline: "Natation", info: "Finale 10m plateforme (H) | Plongeon | Jeux Olympiques de Paris 2024" },
    { src: "images/site5.jpg", discipline: "Cyclisme", info: "Finales omnium (F) | Cyclisme sur piste | Jeux Olympiques de Paris 2024" },
    { src: "images/site6.jpg", discipline: " Lutte", info: "Finale lutte libre 97kg (H) | Lutte | Jeux Olympiques de Paris 2024" },
    { src: "images/site7.jpg", discipline: "Marathon (F)", info: "Marathon (F) | Athlétisme | Jeux Olympiques de Paris 2024" },
    { src: "images/site8.jpg", discipline: "Finale 75kg (F)", info: "Finale 75kg (F) | Boxe | Jeux Olympiques de Paris 2024" },
    { src: "images/site9.jpg", discipline: "Finale +92kg (H)", info: "Finale +92kg (H) | Boxe | Jeux Olympiques de Paris 2024" },
    { src: "images/site10.jpg", discipline: "SWE-GER - Finale (H)", info: "SWE-GER - Finale (H) | Volleyball de plage | Jeux Olympiques de Paris 2024" },
    { src: "images/site11.jpg", discipline: "FRA v USA - Finale (H)", info: "FRA v USA - Finale (H) | Basketball | Jeux Olympiques de Paris 2024" },
    { src: "images/site12.jpg", discipline: "Breaking", info: "Final (H) | Breaking | Jeux Olympiques de Paris 2024" },
    { src: "images/site13.jpg", discipline: "Volleyball de plage (H)", info: "QAT-NOR - Petite finale (H) | Volleyball de plage | Jeux Olympiques de Paris 2024" },
    { src: "images/site14.jpg", discipline: "Athlétisme (F)", info: "Finale relais 4x400m (F) | Athlétisme | Jeux Olympiques de Paris 2024" },
    { src: "images/site15.jpg", discipline: "Handball", info: "GER v DEN - Finale (H) | Handball | Jeux Olympiques de Paris 2024" },
    { src: "images/site16.jpg", discipline: "Cyclisme sur piste (F)", info: "Finale sprint (F) | Cyclisme sur piste | Jeux Olympiques de Paris 2024" },
    { src: "images/site18.jpg", discipline: " Basketball", info: "BEL v AUS - Petite finale (F) | Basketball | Jeux Olympiques de Paris 2024" },
    { src: "images/site19.jpg", discipline: "Pentathlon moderne (F)", info: "Finale (F) | Pentathlon moderne | Jeux Olympiques de Paris 2024" },
    { src: "images/site20.jpg", discipline: "Water-polo", info: "USA v HUN - Petite finale (H) | Water-polo | Jeux Olympiques de Paris 2024" },
    { src: "images/site23.jpg", discipline: "TTaekwondo (H)", info: "Finales 80kg (H) | Taekwondo | Jeux Olympiques de Paris 2024" },
    { src: "images/site21.jpg", discipline: "Canoë sprint(H)", info: "Demi-finales et finale K-1 1000m (H) | Canoë sprint | Jeux Olympiques de Paris 2024" },
    { src: "images/site22.jpg", discipline: "Golf (F)", info: "Stroke play individuel (F) - Dernier tour | Golf | Jeux Olympiques de Paris 2024" },
    { src: "images/site24.jpg", discipline: "Haltérophilie", info: "Finale 71kg (F) | Haltérophilie | Jeux Olympiques de Paris 2024" },
    { src: "images/site25.jpg", discipline: "Escalade sportive", info: "Finales bloc et difficulté (H) | Escalade sportive | Jeux Olympiques de Paris 2024" },
    { src: "images/site26.jpg", discipline: "Tennis de table", info: "SWE v CHN - Petite finale par équipe (H) | Tennis de table | Jeux Olympiques de Paris 2024" },
    { src: "images/site27.jpg", discipline: "Lutte gréco-romaine", info: "Finales 87kg (H) | Lutte gréco-romaine | Jeux Olympiques de Paris 2024" },
    { src: "images/site28.jpg", discipline: "Voile", info: "Finale kitesurf (F) | Voile | Jeux Olympiques de Paris 2024" }
];

// Fonction pour afficher 10 images aléatoires
function displayRandomImages() {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = ''; // Nettoyer la galerie avant d'ajouter les nouvelles images

    // Mélanger les images et en sélectionner 10 au hasard
    const selectedImages = images.sort(() => 0.5 - Math.random()).slice(0, 10);

    selectedImages.forEach(image => {
        // Créer les éléments pour chaque image et description
        const imgContainer = document.createElement('div');
        imgContainer.className = 'image-container';

        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = image.discipline;

        const caption = document.createElement('p');
        caption.textContent = `${image.discipline} - ${image.info}`;

        // Ajouter l'image et la légende à la galerie
        imgContainer.appendChild(imgElement);
        imgContainer.appendChild(caption);
        gallery.appendChild(imgContainer);
    });
}

// Appeler la fonction à chaque chargement de la page
window.onload = displayRandomImages;

// Gestion des cookies après le chargement de la page
document.addEventListener("DOMContentLoaded", () => {
    const cookieConsent = document.getElementById('cookie-consent');
    const acceptButton = document.getElementById('accept-cookies');
    const declineButton = document.getElementById('decline-cookies');

    // Fonction pour accepter les cookies
    acceptButton.onclick = () => {
        cookieConsent.style.display = 'none';  // Masquer le pop-up
        console.log("Cookies acceptés."); // Ajouter une logique pour accepter les cookies ici
    };

    // Fonction pour refuser les cookies
    declineButton.onclick = () => {
        cookieConsent.style.display = 'none';  // Masquer le pop-up
        console.log("Cookies refusés."); // Ajouter une logique pour refuser les cookies ici

        // Masquer toutes les images
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            img.style.display = 'none'; // Masquer chaque image
        });

        // Masquer la carte
        const mapContainer = document.getElementById('map');
        if (mapContainer) {
            mapContainer.style.display = 'none'; // Masquer la carte
        }

        // Alerte pour informer l'utilisateur
        alert("Vous avez refusé les cookies. Certaines fonctionnalités ne seront pas disponibles.");
    };
});
