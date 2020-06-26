const express = require('express');

const app = express();

var port = process.env.PORT || 80

console.log(__dirname);

app.get('/', (req,res) => {
res.send('Oi Jeferson');

});
app.get('/player', (req,res) => {
    res.send('Oi Player');
    
    });

app.listen(port,() => {
console.log('server iniciando...');
});