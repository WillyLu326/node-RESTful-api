/**
 * Created by zhenglu on 12/3/16.
 */

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const empSchema = new Schema({
    name: { type: String, unique: true },
    address: {
        city: String,
        state: String
    },
    age: Number
});

module.exports = mongoose.model('Emp', empSchema);

