const express = require('express');
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));


app.get('', (req, res) => {
    res.render('index', {
        title: 'Aromo-vecinos',
        page: 'inicio'
    });
});

app.get('/mantenimiento', (req, res) => {
    res.render('pages/mantenimiento',{
        title: 'Aromo-vecinos | Mantenimiento',
        page: 'mantenimiento'
    });
});

app.get('/salud', (req, res) => {
    res.render('pages/salud',{
        title: 'Aromo-vecinos | Salud',
        page: 'salud'
    });
});

app.listen(3000, () => {
    console.log("Funcionando en el puerto 3000");
});
