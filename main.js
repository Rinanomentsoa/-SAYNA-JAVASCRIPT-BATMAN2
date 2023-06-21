// Code pour le scrolling progressif vers le haut
function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  
  // Code pour le scrolling progressif vers le bas
  function scrollToBottom() {
    const scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );
    window.scrollTo({
      top: scrollHeight,
      behavior: "smooth"
    });
  }
  
  // Écouteurs d'événements pour les clics sur les images
  const scrollToTopImage = document.querySelector("#scrollToTopImage");
  const scrollToBottomImage = document.querySelector("#scrollToBottomImage");
  
  scrollToTopImage.addEventListener("click", scrollToTop);
  scrollToBottomImage.addEventListener("click", scrollToBottom);

  //Apparition progressive des éléments au fur et à mesure du scrolling
  function animateOnScroll() {
    const fadeSlideElements = document.querySelectorAll('.fade-slide');
  
    fadeSlideElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      if (elementTop < windowHeight) {
        element.classList.add('show');
      }
    });
  }
   window.addEventListener('scroll', animateOnScroll);

   //Scrolling progressif lorsqu’on effectue un clic sur les boutons “Voir le héros” et “Les adversaires”
   document.getElementById("hero").addEventListener("click", function() {
    scrollToSection("justiceSection");
  });
  document.getElementById("adve").addEventListener("click", function() {
    scrollToSection("nemesisSection");
  });
  
  function scrollToSection(sectionId) {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      const sectionOffsetTop = sectionElement.offsetTop;
      window.scrollTo({
        top: sectionOffsetTop,
        behavior: "smooth"
      });
    }
  }
  window.addEventListener('scroll', animateOnScroll);

  // faire apparaître progressivement les images avec un Zoom de 0 % à 100 %, au fur et à mesure du scroll sur la page
  function zoomImageOnScroll() {
    const zoomInElements = document.querySelectorAll('.zoom-in');
  
    zoomInElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      if (elementTop < windowHeight) {
        element.classList.add('show');
      }
    });
  }
  
  window.addEventListener('scroll', zoomImageOnScroll);
  
  
  // Animation un zoom de 10 % sur les CARDS tout en faisant apparaître les mini descriptions
// Sélectionner tous les éléments figure
const figures = document.querySelectorAll('figure');

// Parcourir tous les éléments figure et ajouter les gestionnaires d'événements
figures.forEach((figure) => {
  const image = figure.querySelector('.image');
  const figcaption = figure.querySelector('figcaption');

  figcaption.style.opacity = '0';

  figure.addEventListener('mouseover', () => {
    // Appliquer le zoom de 10%
    image.style.transform = 'scale(1.1)';

    // Afficher le figcaption
    figcaption.style.opacity = '1';
  });

  figure.addEventListener('mouseout', () => {
    // Réinitialiser le zoom
    image.style.transform = 'scale(1)';

    // Masquer le figcaption
    figcaption.style.opacity = '0';
  });
});

//animations canvas




  