const mongoose = require('mongoose');

mongoose.connect('mongodb://lab10-mongodb:dmitriy123245@lab10-mongodb-shard-00-00-w100s.mongodb.net:27017,lab4-mongodb-shard-00-01-w100s.mongodb.net:27017,lab4-mongodb-shard-00-02-w100s.mongodb.net:27017/test?ssl=true&replicaSet=lab4-mongodb-shard-0&authSource=admin&retryWrites=true', {
    useNewUrlParser: true
});


const Film = mongoose.Schema({
    title: {
        type: String,
        required: true,
        min: 4,
        max: 15
    },
    id: {
        type: Number,
        required: true
    },
    popularity: {
        type: Number
    }
});


module.exports = mongoose.model('Film', userSchema);