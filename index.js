const express = require('express');
require('./Word');

const app = express();

app.get('/chao/:name', (req, res) => {
    res.send({ success: true, name: req.params.name });
});

app.listen(3000, () => console.log('Server started.'));
