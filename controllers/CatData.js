var conforum 		= require('./Common');
function datarun(){};
datarun.prototype.constructor = datarun;


/**************************************************************************
*
* Data Run
*
**************************************************************************/
datarun.prototype.datarunfunc =  function(req, res) {
    conforum.dbModel.Category.findOrCreate({category_name:'Airlines'}, function(err,result) { });

    conforum.dbModel.Category.findOrCreate({category_name:'Business & Finances'}, function(err,result) { 
        conforum.dbModel.Category.create({category_name:'Banks',parent_id:result._id}, function(err,result) { });
        conforum.dbModel.Category.create({category_name:'Loans',parent_id:result._id}, function(err,result) { });
        conforum.dbModel.Category.create({category_name:'Tax services',parent_id:result._id}, function(err,result) { });
        conforum.dbModel.Category.create({category_name:'Insurance',parent_id:result._id}, function(err,result) { });
        conforum.dbModel.Category.create({category_name:'Stock Market',parent_id:result._id}, function(err,result) { });
        conforum.dbModel.Category.create({category_name:'Credit cards',parent_id:result._id}, function(err,result) { });
    });

    conforum.dbModel.Category.findOrCreate({category_name:'Cars, Parts & Vehicles'}, function(err,result) { 
        conforum.dbModel.Category.create({category_name:'Car Rental',parent_id:result._id}, function(err,result) { });
        conforum.dbModel.Category.create({category_name:'Auto Insurance & Loan',parent_id:result._id}, function(err,result) { });
        conforum.dbModel.Category.create({category_name:'Car Dealers',parent_id:result._id}, function(err,result) { });
        conforum.dbModel.Category.create({category_name:'Car Service Centers',parent_id:result._id}, function(err,result) { });
        conforum.dbModel.Category.create({category_name:'Gas Stations',parent_id:result._id}, function(err,result) { });
        conforum.dbModel.Category.create({category_name:'Motorcycles & Scooters',parent_id:result._id}, function(err,result) { });
        conforum.dbModel.Category.create({category_name:'Cars, Vans & SUVs',parent_id:result._id}, function(err,result) { });
        conforum.dbModel.Category.create({category_name:'Car Driving Schools',parent_id:result._id}, function(err,result) { });
    });

    conforum.dbModel.Category.findOrCreate({category_name:'Clothing, Shoes & Accessories'}, function(err,result) {  });

    conforum.dbModel.Category.findOrCreate({category_name:'Computers & Accessories'}, function(err,result) { 
        conforum.dbModel.Category.create({category_name:'Desktop Computers',parent_id:result._id}, function(err,result) { });
        conforum.dbModel.Category.create({category_name:'Laptops / Notebooks',parent_id:result._id}, function(err,result) { });
        conforum.dbModel.Category.create({category_name:'Computer Hardware',parent_id:result._id}, function(err,result) { });
        conforum.dbModel.Category.create({category_name:'Computer Software',parent_id:result._id}, function(err,result) { });
    });

    conforum.dbModel.Category.findOrCreate({category_name:'Education'}, function(err,result) { 
        conforum.dbModel.Category.create({category_name:'Schools',parent_id:result._id}, function(err,result) { });
        conforum.dbModel.Category.create({category_name:'Universities',parent_id:result._id}, function(err,result) { });
        conforum.dbModel.Category.create({category_name:'Institutes',parent_id:result._id}, function(err,result) { });
    });

    conforum.dbModel.Category.findOrCreate({category_name:'Electronics & Appliances'}, function(err,result) { 
        conforum.dbModel.Category.create({category_name:'Refrigerators',parent_id:result._id}, function(err,result) { });
        conforum.dbModel.Category.create({category_name:'Printers',parent_id:result._id}, function(err,result) { });
        conforum.dbModel.Category.create({category_name:'Mobile Handsets',parent_id:result._id}, function(err,result) { });
        conforum.dbModel.Category.create({category_name:'TVs',parent_id:result._id}, function(err,result) { });
        conforum.dbModel.Category.create({category_name:'Washing Machines',parent_id:result._id}, function(err,result) { });
        conforum.dbModel.Category.create({category_name:'Digital Cameras',parent_id:result._id}, function(err,result) { });
        conforum.dbModel.Category.create({category_name:'Water Heaters & Geysers',parent_id:result._id}, function(err,result) { });
    });

    conforum.dbModel.Category.findOrCreate({category_name:'Entertainment and Recreation'}, function(err,result) { 
        conforum.dbModel.Category.create({category_name:'Cinema',parent_id:result._id}, function(err,result) { });
        conforum.dbModel.Category.create({category_name:'Movie Rentals',parent_id:result._id}, function(err,result) { });
        conforum.dbModel.Category.create({category_name:'Clubs, Bars, Restaurants',parent_id:result._id}, function(err,result) { });
        conforum.dbModel.Category.create({category_name:'Amusement Parks',parent_id:result._id}, function(err,result) { });
        conforum.dbModel.Category.create({category_name:'Satellite, Cable DTH TV',parent_id:result._id}, function(err,result) { });
    });

    conforum.dbModel.Category.findOrCreate({category_name:'Family & Relationships'}, function(err,result) { 
        conforum.dbModel.Category.create({category_name:'Neighbours',parent_id:result._id}, function(err,result) { });
        conforum.dbModel.Category.create({category_name:'Sexual Abuse',parent_id:result._id}, function(err,result) { });
        conforum.dbModel.Category.create({category_name:'Online Dating Services',parent_id:result._id}, function(err,result) { });;
    });

    conforum.dbModel.Category.findOrCreate({category_name:'Food'}, function(err,result) {});

    conforum.dbModel.Category.findOrCreate({category_name:'Government Organizations'}, function(err,result) { 
        conforum.dbModel.Category.create({category_name:'Police',parent_id:result._id}, function(err,result) { });
        conforum.dbModel.Category.create({category_name:'Municipal Corporation',parent_id:result._id}, function(err,result) { });
        conforum.dbModel.Category.create({category_name:'Passport Services',parent_id:result._id}, function(err,result) { });
        conforum.dbModel.Category.create({category_name:'Citizenship & Immigration',parent_id:result._id}, function(err,result) { });
        conforum.dbModel.Category.create({category_name:'Postal & Delivery Services',parent_id:result._id}, function(err,result) { });
    });

    conforum.dbModel.Category.findOrCreate({category_name:'Health & Beauty'}, function(err,result) { 
        conforum.dbModel.Category.create({category_name:'Health & Life Insurance',parent_id:result._id}, function(err,result) { });
        conforum.dbModel.Category.create({category_name:'Plastic Surgery',parent_id:result._id}, function(err,result) { });
        conforum.dbModel.Category.create({category_name:'Hospitals',parent_id:result._id}, function(err,result) { });
        conforum.dbModel.Category.create({category_name:'Pharmacy',parent_id:result._id}, function(err,result) { });
        conforum.dbModel.Category.create({category_name:'Weight Loss Products',parent_id:result._id}, function(err,result) { });
        conforum.dbModel.Category.create({category_name:'Cosmetics',parent_id:result._id}, function(err,result) { });
        conforum.dbModel.Category.create({category_name:'Dental Services',parent_id:result._id}, function(err,result) { });
        conforum.dbModel.Category.create({category_name:'Hair and Beauty Salons',parent_id:result._id}, function(err,result) { });
        conforum.dbModel.Category.create({category_name:'Doctors',parent_id:result._id}, function(err,result) { });
    });

    conforum.dbModel.Category.findOrCreate({category_name:'Home & Garden'}, function(err,result) { 
        conforum.dbModel.Category.create({category_name:'Appliances',parent_id:result._id}, function(err,result) { });
        conforum.dbModel.Category.create({category_name:'Utility Services',parent_id:result._id}, function(err,result) { });
        conforum.dbModel.Category.create({category_name:'Furniture',parent_id:result._id}, function(err,result) { });
    });

    conforum.dbModel.Category.findOrCreate({category_name:'Internet Services'}, function(err,result) { 
        conforum.dbModel.Category.create({category_name:'Hosting & Web Design',parent_id:result._id}, function(err,result) { });
        conforum.dbModel.Category.create({category_name:'Online Shopping',parent_id:result._id}, function(err,result) { });
        conforum.dbModel.Category.create({category_name:'Broadband',parent_id:result._id}, function(err,result) { });
        conforum.dbModel.Category.create({category_name:'Online Games',parent_id:result._id}, function(err,result) { });
        conforum.dbModel.Category.create({category_name:'Lottery and Sweepstake Emails',parent_id:result._id}, function(err,result) { });
    });

    conforum.dbModel.Category.findOrCreate({category_name:'Jewelry & Watches'}, function(err,result) { });

    conforum.dbModel.Category.findOrCreate({category_name:'Job & Career'}, function(err,result) { 
        conforum.dbModel.Category.create({category_name:'Work at Home, Part Time Jobs',parent_id:result._id}, function(err,result) { });
        conforum.dbModel.Category.create({category_name:'Employers',parent_id:result._id}, function(err,result) { });
        conforum.dbModel.Category.create({category_name:'Employees',parent_id:result._id}, function(err,result) { });
    });

    conforum.dbModel.Category.findOrCreate({category_name:'Kids & Baby'}, function(err,result) {  });

    conforum.dbModel.Category.findOrCreate({category_name:'Law & Civil Rights'}, function(err,result) {  });

    conforum.dbModel.Category.findOrCreate({category_name:'Lawyers and Attorneys'}, function(err,result) {  });

    conforum.dbModel.Category.findOrCreate({category_name:'Magazines & Newspapers'}, function(err,result) {  });

    conforum.dbModel.Category.findOrCreate({category_name:'Movement & Delivery'}, function(err,result) {  });

    conforum.dbModel.Category.findOrCreate({category_name:'Nature & Environment'}, function(err,result) {  });

    conforum.dbModel.Category.findOrCreate({category_name:'News & Media'}, function(err,result) {  });

    conforum.dbModel.Category.findOrCreate({category_name:'Other'}, function(err,result) {  });

    conforum.dbModel.Category.findOrCreate({category_name:'Pets & Animals'}, function(err,result) {  });

    conforum.dbModel.Category.findOrCreate({category_name:'Products & Services'}, function(err,result) { 
        conforum.dbModel.Category.create({category_name:'Department Stores',parent_id:result._id}, function(err,result) { });
        conforum.dbModel.Category.create({category_name:'Security Services',parent_id:result._id}, function(err,result) { });
     });

    conforum.dbModel.Category.findOrCreate({category_name:'Public Transportation'}, function(err,result) { 
        conforum.dbModel.Category.create({category_name:'Airlines',parent_id:result._id}, function(err,result) { });
        conforum.dbModel.Category.create({category_name:'Railways',parent_id:result._id}, function(err,result) { });
        conforum.dbModel.Category.create({category_name:'Taxi',parent_id:result._id}, function(err,result) { });
    }); 

    conforum.dbModel.Category.findOrCreate({category_name:'Real Estate'}, function(err,result) { 
        conforum.dbModel.Category.create({category_name:'Building Developers',parent_id:result._id}, function(err,result) { });
        conforum.dbModel.Category.create({category_name:'House, Apartment Rental',parent_id:result._id}, function(err,result) { });
    });

    conforum.dbModel.Category.findOrCreate({category_name:'Restaurants & Bars'}, function(err,result) { 
        conforum.dbModel.Category.create({category_name:'Fast Food Restaurants',parent_id:result._id}, function(err,result) { });
    });

    conforum.dbModel.Category.findOrCreate({category_name:'Society & Culture'}, function(err,result) { });

    conforum.dbModel.Category.findOrCreate({category_name:'Sports & Recreation'}, function(err,result) { 
        conforum.dbModel.Category.create({category_name:'Fitness Centers',parent_id:result._id}, function(err,result) { });
    });

    conforum.dbModel.Category.findOrCreate({category_name:'Telecommunications'}, function(err,result) { 
        conforum.dbModel.Category.create({category_name:'Mobile Service Providers',parent_id:result._id}, function(err,result) { });
        conforum.dbModel.Category.create({category_name:'Landline & Home Phone Provider',parent_id:result._id}, function(err,result) { });
    });

    conforum.dbModel.Category.findOrCreate({category_name:'Travel & Vacations'}, function(err,result) { 
        conforum.dbModel.Category.create({category_name:'Airlines',parent_id:result._id}, function(err,result) { });
        conforum.dbModel.Category.create({category_name:'Travel Agents',parent_id:result._id}, function(err,result) { });
    });

    conforum.dbModel.Category.findOrCreate({category_name:'Unauthorized charges'}, function(err,result) { });

    conforum.dbModel.Category.findOrCreate({category_name:'Unsolicited Phone Calls'}, function(err,result) { });

    conforum.dbModel.Category.findOrCreate({category_name:'Wedding services'}, function(err,result) { });

    res.status(200).json({success:1,msg: 'Data Run is successful'});
};

module.exports = new datarun();