const express = require('express');
const app = express();
app.use(express.json());
app.get('/', (req, res) => res.send('HYPEPAD API running'));
app.listen(3000, () => console.log('API listening'));