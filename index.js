const express = require('express');
const bodyParser = require('body-parser');
const { Word } = require('./Word');

const parser = bodyParser.urlencoded({ extended: false });

const app = express();
app.use(parser);

app.get('/word', (req, res) => {
    // Show ra tat ca words
    Word.find({})
    .then(words => res.send({ success: true, words }))
    .catch(error => res.send({ success: false, error: error.message }));
});

app.delete('/word/:_id', (req, res) => {
    Word.findByIdAndRemove(req.params._id)
    .then(word => {
        if (!word) throw new Error('Cannot find word.');
        res.send({ success: true, word });
    })
    .catch(error => res.send({ success: false, error: error.message }))
});

app.post('/word', (req, res) => {
    const { en, vn } = req.body;
    const word = new Word({ en, vn });
    word.save()
    .then(word => res.send({ success: true, word }))
    .catch(error => res.send({ success: false, error: error.message }));
});

app.listen(3000, () => console.log('Server started.'));
