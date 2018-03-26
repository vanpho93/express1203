const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/reactnative1203')
.then(() => console.log('Database connected.'))
.catch((error) => console.log('Cannot connect database.', error))
