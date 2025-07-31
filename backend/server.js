const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('HYPEPAD API'));
app.listen(3000, ()=>console.log('API running'));