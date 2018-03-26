const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/reactnative1203')
.then(() => console.log('Database connected.'))
.catch((error) => console.log('Cannot connect database.', error))

const wordSchema = new mongoose.Schema({
    en: { type: String, trim: true, unique: true },
    vn: { type: String, trim: true, unique: true },
    isMemorized: { type: Boolean, default: false }
});

const Word = mongoose.model('Word', wordSchema);
