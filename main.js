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

//Slider auto
// Citations
const quoteContainer = document.getElementById("quote-container");

const quotes = [
  {
    citation: "La seule façon raisonnable de vivre en ce bas monde,\nc'est en dehors des règles.",
    author: "The Dark Knight : Le Chevalier Noir - Le Joker à Batman (2008)"
  },
  {
    citation: "Soit on meurt en héros, soit on vit assez longtemps pour se voir endosser le rôle du méchant.",
    author: "The Dark Knight : Le Chevalier Noir - Harvey Dent (2008)"
  },
  {
    citation: "Le héros peut être en chacun, même en celui qui fait une chose aussi simple et rassurante que mettre un manteau sur les épaules d'un garçon et ainsi lui faire comprendre que le monde ne s'est pas écroulé.",
    author: "The Dark Knight Rises - Batman à James Gordon (2012)"
  },
  {
    citation: "Ah ! Tu crois que l'obscurité est ton allié. Tu n'a fait qu'adopter la pénombre. Moi je suis né dedans, j'ai été façonné par elle. Je n'ai découvert la lumière qu'a l'âge d'homme, et alors, elle m'a juste paru AVEUGLANTE !",
    author: "The Dark Knight Rises - Bane à Batman (2012)"
  },
  {
    citation:"- Je vous prépare la batmoto monsieur ? \n- En pleine journée Alfred ? Pas très subtile. \n- La Lamborghini alors... beaucoup plus subtile.",
    author:"The Dark Knight: Le Chevalier Noir - Alfred et Batman (2008)"
  },
  {
    citation:"Freeze, t'es givré !",
    author:"Batman & Robin - Batman à Mr Freeze (1997)"
  },
  {
    citation:"La peur est un outil. Cette lumière qui déchire le ciel, ce n’est pas qu’un appel à l’aide. C’est un avertissement.",
    author:"Batman - Batman (2022)"
  },
  {
    citation:"- Pourquoi tombons nous Bruce ? \n- …- Pour mieux apprendre à nous relever.",
    author:"Batman Begins - Thomas Wayne à Bruce Wayne 8 ans (2005)"
  },
  {
    citation:"Des hommes tombent du ciel, les dieux crachent la foudre, des innoncents meurent. C’est comme cela que ça commence, monsieur. De la fureur, de la fièvre, un sentiment d’impuissance, qui rend les hommes bien… cruels.",
    author:"Batman v Superman : l’aube de la justice, Alfred à Batman (2016)"
  }
];
let currentIndex = 0;
const intervalTime = 5000; // en millisecondes
let slideInterval;
// Fonction pour afficher la citation actuelle
const showQuote = () => {
  quoteContainer.querySelector(".quote.citation").textContent = quotes[currentIndex].citation;
  quoteContainer.querySelector(".quote.author").textContent = quotes[currentIndex].author;
};
// Citation suivante
const nextQuote = () => {
  currentIndex = (currentIndex + 1) % quotes.length;
  showQuote();
};
showQuote();
slideInterval = setInterval(nextQuote, intervalTime);

//ANNONCES SLIDERS
const ensemble = document.getElementById("ensemble");
const textContainer = document.getElementById("text-container");
const imageElement = document.getElementById("bat-image");

const content = [
  {
    type: "ACTION, ADVENTURE",
    title: "Batman Begins",
    note: "8.2",
    descri: "Le jeune Bruce Wayne assiste impuissant au meurtre de ses parents. Profondément traumatisé, il grandit obnubilé par un désir de vengeance. La Ligue des ombres, une secte de guerriers ninja dirigée par Ra's al Ghul, se chargera de son entraînement. De retour chez lui à Gotham, avec l'aide de son majordome Alfred Pennyworth, Bruce Wayne se lance alors dans la lutte contre le crime sous le nom de Batman.",
    image: "Assets/Illustrations/Bathome_ba1.png"
  },
  {
    type: "ACTION, ADVENTURE",
    title: "The Dark Knight",
    note: "9",
    descri: "Batman aborde une phase décisive dans sa guerre contre le crime. Avec l'aide du lieutenant de police Jim Gordon et du nouveau procureur Harvey Dent, il entreprend de démanteler les dernières organisations criminelles qui infestent les rues de la ville. L'association s'avère efficace, mais le trio se heurte bientôt à un nouveau génie du crime qui répand la terreur et le chaos dans Gotham : le Joker.",
    image: "Assets/Illustrations/Bathome_ba3.png"
  },
  {
    type: "ACTION, ADVENTURE",
    title: "The Dark Knight Rises",
    note: "8.4",
    descri: "Huit ans ont passé depuis que Batman a disparu, passant du statut de héros à celui de fugitif. Le « Chevalier Noir » a tout sacrifié pour le mieux. Pendant un certain temps, le mensonge a l'effet escompté : la criminalité de Gotham City est presque éliminée par le commissaire James Gordon avec l'unité anticrime d'Harvey Dent. Mais l'arrivée à Gotham de Bane, un terroriste masqué, chamboule l'ordre établi et pousse Bruce à sortir de l'exil qu'il s'est imposé",
    image: "Assets/Illustrations/bat4.png"
  }
];

let currentIndexOfTrailer = 0;
const intervalTimeOfTrailer = 5000;
let slideIntervalOfTrailer;

// Fonction pour afficher le contenu actuel
const showContent = () => {
  const currentContent = content[currentIndexOfTrailer];
  textContainer.querySelector(".annonce-type").textContent = currentContent.type;
  textContainer.querySelector(".annonce-title").textContent = currentContent.title;
  textContainer.querySelector(".annonce-note").textContent = currentContent.note;
  textContainer.querySelector(".annonce-descri").textContent = currentContent.descri;
  imageElement.querySelector("img").src = currentContent.image;
};

// Fonction pour passer au contenu suivant
const nextContent = () => {
  currentIndexOfTrailer = (currentIndexOfTrailer + 1) % content.length;
  showContent();
};
showContent();
slideIntervalOfTrailer = setInterval(nextContent, intervalTimeOfTrailer);


//JUSTICE LEAGUE SLIDER
const imageBackground = document.getElementById("justice-league-img");
const images = [
  "Assets/Illustrations/Bathome11.png",
  "Assets/Illustrations/bathomex1x1.png",
  "Assets/Illustrations/bathomex1x2.png",
  "Assets/Illustrations/bathomex1x3.png",
  "Assets/Illustrations/bathomex1x4.png",
  "Assets/Illustrations/bathomex1x5.png",
  "Assets/Illustrations/bathomex1x6.png",
  "Assets/Illustrations/bathomex1x7.png",
  "Assets/Illustrations/bathomex1x8.png",
  "Assets/Illustrations/bathomex1x9.png",
  "Assets/Illustrations/bathomex1x10.png"
];
let currentIndexBg = 0;

function startSlider() {
  setInterval(nextSlide, 5000);
}

function nextSlide() {
  currentIndexBg = (currentIndexBg + 1) % images.length;
  imageBackground.src = images[currentIndexBg];
}

imageBackground.onload = startSlider;
