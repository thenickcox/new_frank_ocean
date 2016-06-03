const express = require('express');
const app = express();
const fetch = require('node-fetch');
const moment = require('moment');

const artistId = '2h93pZq0e7k5yf4dywlkpM';
const spotifyUrl = `https://api.spotify.com/v1/artists/${artistId}/albums`;
const currentAlbumCount = 20;

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  fetch(spotifyUrl)
    .then(r => r.json())
    .then(d => d.items.length)
    .then((albumCount) => {
      res.render('index', {
        isNewAlbum: albumCount > currentAlbumCount ? 'YES' : 'NO',
        isIsNot: albumCount > currentAlbumCount ? 'is' : 'is not',
        date: moment().format('dddd, MMMM Do, Y')
      });
    });
});

app.listen(8888, () => {
  console.log('Listening on port 3000!');
});
