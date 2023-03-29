/*Descrizione:
Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta 
usando Vue.

Bonus:
1- al click su una thumb, visualizzare in grande l'immagine corrispondente
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
      marvel: {
        title: "Marverls Spiderman Miles Morale",
        description:
          "Experience the rise of Miles Morales as the new hero master incredible,explosive new powers to became his own Spider-Man",
        images: [
          "./assets/img/01.webp",
          "./assets/img/02.webp",
          "./assets/img/03.webp",
          "./assets/img/04.webp",
          "./assets/img/05.webp",
        ],
      },
    };
  },
}).mount("#app");
