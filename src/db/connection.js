const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/test',{
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", ()=>{
    console.log("Mongo client connected!");
});

//module.exports = mongoose;