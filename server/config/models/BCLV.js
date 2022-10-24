let mongoose = require('mongoose');

//create a model class
let listModel = mongoose.Schema({
    contactname: string,
    contactnumber:Number,
    Emailaddress:string,
    
},
{  
    collection: "list"
});

module.exports = mongoose.model('list', listModel);