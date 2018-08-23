const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

//port
const port = process.env.PORT || 8080;

//Pagina pública
app.use(express.static(__dirname + '/public'));


//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', function(req, res){
  res.render('home', {nombre: 'angel DAVID'});
});
app.get('/about', function(req, res){
  res.render('about');
});

app.listen(port, () => {
  console.log(`Escuchando el puerto ${port}...`)
});
