/*Descrizione:
Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta 
usando Vue.

Bonus:
1- al c, visualizzare in grande l'immagine corrispondente
2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere 
quando esce
Consigli del giorno:
regola d'oro: riciclare ovunque possibile! Questo significa che per la parte di
markup possiamo recuperare html e css dell'esercizio svolto qualche giorno fa:
 è già tutto pronto!
il riciclo spesso va a braccetto con le funzioni! Sapendole sfruttare bene,
 l'esercizio si riduce a poche righe ;)*/

const { createApp } = Vue;

createApp({
  data() {
    return {
      activeImage: 0,
      images: [
        {
          title: "Marverl's Spiderman Miles Morale",
          description:
            "Experience the rise of Miles Morales as the new hero master incredible,explosive new powers to became his own Spider-Man",
          src: "./assets/img/01.webp",
        },
        {
          title: "Ratchet & Clank: Rift Apart",
          description:
            "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
          src: "./assets/img/02.webp",
        },
        {
          title: "Fortnite",
          description:
            "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
          src: "./assets/img/03.webp",
        },
        {
          title: "Stray",
          description:
            "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
          src: "./assets/img/04.webp",
        },
        {
          title: "Marvel's Avengers",
          description:
            "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
          src: "./assets/img/05.webp",
        },
      ],
    };
  },
  methods: {
    prev() {
      this.activeImage--;
      if (this.activeImage < 0) {
        this.activeImage = this.marvel.images.length - 1;
      }
    },
    next() {
      this.activeImage++;
      if (this.activeImage === this.marvel.images.length) {
        this.activeImage = 0;
      }
    },
    changeImage(index) {
      this.activeImage = index;
      console.log(index);
    },
  },
}).mount("#app");
