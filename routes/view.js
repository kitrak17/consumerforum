var express = require('express');
var router = express.Router();
var conforum  = require('../Controllers/Common');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/registerbusiness', function(req, res, next) {
    conforum.dbModel.Category.find({parent_id:{ $exists: true, $ne: [] }}, null, {sort: {'parent_id': -1}})
        .populate('parent_id')
        .exec(function (err, results) {
            if(err) {
                console.log(err);
            } else {
                res.render('registerbusiness', {
                    Categories: results,
                    pageTitle: "Register Business"
                });
            }
        });
});

module.exports = router;