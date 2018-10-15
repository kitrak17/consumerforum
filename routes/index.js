var express = require('express');
var router = express.Router();

const multer = require("multer");
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");
cloudinary.config({ 
  cloud_name: 'consumer-forum', 
  api_key: '956511895165736', 
  api_secret: 'p4ke-WhZ2oNDsncttYvL2amluEo' 
});
const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: "demo",
  allowedFormats: ["jpg", "png", "jpeg"],
  transformation: []
});
const parser = multer({ storage: storage });

var businessVal 		= require('../validations/Business');
var businessCtrl 		= require('../controllers/Business');
var dataRunCtrl 		= require('../controllers/CatData');

// API
router.get('/data/run/', dataRunCtrl.datarunfunc);
router.post('/business/signup/', businessVal.register, parser.single('logo'), businessCtrl.register);
router.post('/business/logoupload/', parser.single('image'), businessCtrl.logoupload);
router.post('/business/addcategory/', businessVal.addcategory, businessCtrl.addcategory);
//router.post('/business/addsubcategory/', businessVal.addsubcategory, businessCtrl.addsubcategory);
router.get('/business/getcategories/',  businessCtrl.getcategories);


module.exports = router;
