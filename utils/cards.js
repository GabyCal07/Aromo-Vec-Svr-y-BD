// const cards = [
//     {
//         name: 'Cuidado de tu casa',
//         description: 'Pintores, albañiles, electricistas, plomeros, calderas, jardineros y más...',
//         img: 'img/multiservicios.jpg',
//         page: 'mantenimiento'
//     },
//     {
//         name: 'Salud',
//         description: 'Centros de salud, urgencias, médicos y pediatras, farmacias, psicologos, etc..',
//         img: 'img/salud.jpg',
//         page: 'salud'       
//     },
//     {
//         name: 'Mascotas',
//         description: 'Veterinarios, alimentos, peluquerías, adiestramiento, lugares de guarda',
//         img: 'img/mascotas.jpg',
//         page: 'mascotas'        
//     },
//     {
//         name: 'Comidas',
//         description: 'Verdulerías, carnicerías, comidas caseras, sushi, vinos, picadas, delivery',
//         img: 'img/alimentos.jpg',
//         page: 'comidas'
//     }
// ];

const request = require('postman-request');

const getAllCards = (callback) => {
    //request('http://localhost:3001/grupos', (error, res, body) => {
        
    request('https://aromo-api.herokuapp.com/grupos', (error, res, body) => {
 
    if (error) {
        callback(error, undefined);
    }

    if (res){
        if (body){
            return callback(undefined, body);
        }
        callback('No se encontraron tarjetas', undefined);
        }
            
    });
}


//module.exports = cards
module.exports = {
    getAllCards    
};