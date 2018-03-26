const express = require('express');
const { Word } = require('./Word');

const app = express();

app.get('/word', (req, res) => {
    // Show ra tat ca words
    Word.find({})
    .then(words => res.send({ success: true, words }))
    .catch(error => res.send({ success: false, error: error.message }))
});

app.listen(3000, () => console.log('Server started.'));
