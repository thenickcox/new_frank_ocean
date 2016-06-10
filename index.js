const express = require('express');
const app = express();
const fetch = require('node-fetch');

const artistId = '2h93pZq0e7k5yf4dywlkpM';
const spotifyUrl = `https://api.spotify.com/v1/artists/${artistId}/albums`;
const currentAlbumCount = 20;

app.set('view engine', 'pug');
app.use(express.static('public'));
app.set('port', (process.env.PORT || 5000));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/check', (req, res) => {
  fetch(spotifyUrl)
    .then(r => r.json())
    .then(d => d.items.length)
    .then((albumCount) => {
      const isNewAlbum = albumCount > currentAlbumCount;
      const random = Math.floor(Math.random() * 6) + 1;
      const yesNo = isNewAlbum === false ? 'no' : 'yes';
      const response = `headline-${yesNo}-${random}.svg`;
      res.json({ backgroundImage: response });
    });
});

app.listen(app.get('port'), () => {
  console.log(`Listening on port ${app.get('port')}!`);
});
