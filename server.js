const express = require('express');

const app = express();

app.get('/',(req,res) => res.send('<h1>Recordatorio con express</h1>'))

app.listen(8080);
console.log('sirviendo en puerto 8080');


/*
const express = require('express');

const app = express();

app.get('/',(req,res) => res.send('Recordatorio con express'))

app.listen(3000);
console.log('sirviendo en puerto 3000');
*/