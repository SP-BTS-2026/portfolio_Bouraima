// On crée des variables pour stocker la liste des images et savoir laquelle on regarde
let imagesProjet = []; 
let indexActuel = 0;

// Cette fonction s'exécute quand tu cliques sur le bouton "Voir la présentation"
function ouvrirGalerie(idProjet) {
  // 1. On va chercher la div cachée qui contient les images du projet (ex: galerie-legalhelp)
  const container = document.getElementById('galerie-' + idProjet);
  const imgs = container.getElementsByTagName('img');
  
  // 2. On vide la liste et on ajoute les liens (src) de chaque image dedans
  imagesProjet = [];
  for (let i = 0; i < imgs.length; i++) {
    imagesProjet.push(imgs[i].src);
  }
  
  // 3. On commence par la première image (index 0)
  indexActuel = 0;
  document.getElementById('img-active').src = imagesProjet[indexActuel];
  
  // 4. On affiche la fenêtre noire (Lightbox) qui était cachée
  document.getElementById('lightbox').style.display = 'flex';
}

// Cette fonction permet de passer à l'image suivante ou précédente
function changerImage(direction) {
  indexActuel += direction;
  
  // Si on dépasse la fin, on revient au début
  if (indexActuel >= imagesProjet.length) indexActuel = 0;
  // Si on va avant le début, on va à la dernière image
  if (indexActuel < 0) indexActuel = imagesProjet.length - 1;
  
  // On met à jour l'image affichée
  document.getElementById('img-active').src = imagesProjet[indexActuel];
}

// Cette fonction ferme la fenêtre quand on clique sur la croix
function fermerGalerie() {
  document.getElementById('lightbox').style.display = 'none';
}