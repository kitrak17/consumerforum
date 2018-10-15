/**************************************************************************
*
*	User Controller
*	@Author  : Karthick M
*	@Email   : karthickm@wekancode.com 
*	@Company : Wekancode Technologies
*	@Website : www.wekancode.com
*
**************************************************************************/

var conforum 		= require('./Common');
// var address 	= require('./mongoose/Address');
// var profile 	= require('./mongoose/Profile');
// var users 		= require('./mongoose/Users');


function business(){};
business.prototype.constructor = business;


/**************************************************************************
*
* Business Registration
*
**************************************************************************/
business.prototype.register =  function(req, res) {
    'use strict';
    var error 	= req.validationErrors();
    if(error) {
    	var errors = formatValidationErrors(error);
		res.status(400).json({success:0,errors:errors});
    } else {
        if(!req.file) { res.status(400).json({"success":0,"errors":[{"location":"body","param":"logo","msg":"Please upload business logo","value":""}]}); return; }
        conforum.async.parallel([
            // Country check
            function(callback){
                conforum.dbModel.Country.findOrCreate({ name: req.body.country }, (err, result) => {
                    callback(null,result._doc);
                })
            },
            // State check
            function(callback){
                conforum.dbModel.State.findOrCreate({ name: req.body.state }, (err, result) => {
                    callback(null,result._doc);
                })
            },
            // City check
            function(callback){
                conforum.dbModel.City.findOrCreate({ name: req.body.city }, (err, result) => {
                    callback(null,result._doc);
                })
            },
        ], function(err, results) {
            // Update City, State
            conforum.dbModel.City.findOneAndUpdate({name:req.body.city}, {country:results[0],state:results[1]}, function (err, city) {  });
            conforum.dbModel.State.findOneAndUpdate({name:req.body.state}, {country:results[0]}, function (err, state) {  });
            var businessData = {
                business_name: req.body.business_name,
                category_id: req.body.category_id,
                address: req.body.address,
                city: results[2]._id,
                state: results[1]._id,
                country: results[0]._id,
                pincode: req.body.pincode,
                website: req.body.website,
                email: req.body.email,
                phone_number: req.body.phone_number,
                logo: req.file.secure_url,
                verified:1,
                claimed:0,
                active:1,
                created_at:new Date()
            };
            var business = conforum.dbModel.Business(businessData);
            business.save(function(error) {
                if (error) { 
                    res.status(500).json({success:0,errors: error });  return;
                 } else {
                    res.status(200).json({success:1,msg: 'Business details are added successfully'});
                 } 
            });
        });
        
    }
}

business.prototype.logoupload =  function(req, res) {
    'use strict';
    var error 	= req.validationErrors();
    var files 	= req.file;
    //if(!files.length) { res.status(400).json({success:0, errors:[{param:'photos',msg:'File is missing'}]}); return; }
    if(error) {
    	var errors = formatValidationErrors(error);
		res.status(400).json({success:0,errors:errors});
    } else {
        res.status(200).json({success:1,data:files});
    }
}

business.prototype.addcategory =  function(req, res) {
    'use strict';
    var error 	= req.validationErrors();
    if(error) {
    	var errors = formatValidationErrors(error);
		res.status(400).json({success:0,errors:errors});
    } else {
        conforum.dbModel.Category.create({category_name:req.body.category_name}, function(err,result) {
            res.status(200).json({success:1,msg:"Added Successfully",data:result});
        });
    }
}

// business.prototype.addsubcategory =  function(req, res) {
//     'use strict';
//     var error 	= req.validationErrors();
//     if(error) {
//     	var errors = formatValidationErrors(error);
// 		res.status(400).json({success:0,errors:errors});
//     } else {
//         conforum.dbModel.SubCategory.create({sub_category_name:req.body.sub_category_name, category_id:req.body.category_id}, function(err,result) {
//             res.status(200).json({success:1,msg:"Added Successfully",data:result});
//         });
//     }
// }

business.prototype.getcategories =  function(req, res) {
    'use strict';
    var error 	= req.validationErrors();
    if(error) {
    	var errors = formatValidationErrors(error);
		res.status(400).json({success:0,errors:errors});
    } else {
        conforum.dbModel.Category.find({parent_id:{ $exists: true, $ne: [] }}, null, {sort: {'parent_id': -1}})
        .populate('parent_id')
        .exec(function (err, result) {
            res.status(200).json({success:1,data:result});
        });
    }
}

module.exports = new business();