// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// BONUS:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.


const newapp = new Vue(
    {
        el: '#container',
        data: {
            textTitle: 'Il tuo messaggio qui',
            imgPath: 'img/infinitypool.jpg',
            imgAlt: 'Infinity Pool Image'
        }
    }
);