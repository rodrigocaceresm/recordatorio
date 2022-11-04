const express = require('express');

const app = express();

app.get('/',(req,res) => res.send('Recordatorio con express'))

app.listen(3000);
console.log('sirviendo en puerto 3000');