let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our Book Model
let list = require('../models/list');

/* GET Route for the Book List page - READ OPeration */
router.get('/', (req, res, next) => {
    Book.find((err, contactlist) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(BookList);

            res.render('list', {title: 'contact list', contactlist: list})            
        }
    });
});

module.exports = router;