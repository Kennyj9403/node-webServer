import express from'express';
import path from 'path';
import {fileURLToPath} from 'url';
import hbs from 'hbs';
import dotenv from 'dotenv'

dotenv.config()
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = process.env.PORT;



//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials');

// contenido estatico
app.use( express.static('public'));

// app.get('/', (req, res) => {
//   res.render('home', {
//     nombre: 'Kenny',
//     titulo: 'Render desde Express'
//   });
// });

app.get('/generic', (req, res) => {
  res.render('generic',{
    nombre: 'Kenny',
    titulo: 'Render desde Express'
  })
});

app.get('/elements', (req, res) => {
  res.render('elements',{
    nombre: 'Kenny',
    titulo: 'Render desde Express'
  })
});

app.get('*', (req, res) => {
  res.sendFile( __dirname + '/public/index.html')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})