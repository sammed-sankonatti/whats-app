const mongoose = require('mongoose');


const whatsappSchema=mongoose.Schema({
    message: String,
    name:String,
    timestamp:String,
    received:Boolean
});

const  messagecontent =mongoose.model('messagecontent', whatsappSchema);
module.exports =messagecontent;