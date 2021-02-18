const mongoose = require('../db/connection')

const Schema = mongoose.Schema;

const Admin = new Schema({
    nombre: String
});
let admin = mongoose.model("admin", Admin)
module.exports = admin;
