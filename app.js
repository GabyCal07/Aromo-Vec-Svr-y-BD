const express = require('express');
const path = require('path');
const cards = require('./utils/cards');
const port = process.env.PORT || 3000;
const title = 'Aromo-vecinos';

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('', (req, res)=>{
    cards.getAllCards((error, data) => {
        
        if (error) {
            //return res.send({ error });
            return res.send(error);
        }
        const JSONBody = JSON.parse(data);        
        return res.render('index', {
            title,
            page: 'inicio',
            JSONBody
        });
    });
});

// app.get('', (req, res) => {
//     res.render('index', {
//         title: 'Aromo-vecinos',
//         page: 'inicio',
//         cards
//     });
// });

app.get('/mantenimiento', (req, res) => {
    res.render('pages/mantenimiento',{
        title: `${title} | Mantenimiento`,        
        page: 'mantenimiento'        
    });
});

app.get('/salud', (req, res) => {
    res.render('pages/salud',{
        title: `${title} | Salud`,        
        page: 'salud'
    });
});

app.listen(port, ()=>{
    console.log(`Funcionando en el puerto ${port}`);
});
