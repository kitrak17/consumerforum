var mongoose = require('mongoose');

//Set up default mongoose connection
//var mongoDB = 'mongodb://localhost/consumer_forum';
var mongoDB = 'mongodb://kartik:kitrak123@ds225608.mlab.com:25608/heroku_jl98f91c';
//mongoose.connect('mongodb://localhost/myappdatabase');
mongoose.connect(mongoDB, { useNewUrlParser: true });
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId

// Business 
var businessSchema = new Schema({
    business_name: String,
    category_id: [{
        type: ObjectId,
        ref: 'Category' 
      }],
    sub_category_id: [{
        type: ObjectId,
        ref: 'SubCategory' 
      }],
    address: String,
    city:  [{
        type: ObjectId,
        ref: 'City' 
      }],
    state:  [{
        type: ObjectId,
        ref: 'State' 
      }],
    country:  [{
        type: ObjectId,
        ref: 'Country' 
      }],
    pincode: String,
    website: String,
    email: String,
    phone_number: String,
    logo: String,
    verified: Number,
    claimed: Number,
    claimed_by: [{
        type: ObjectId,
        ref: 'User' 
      }],
    active: Number,
    created_at: { type : Date },
    updated_at: { type : Date, default: Date.now }
});
var Business = mongoose.model('Business', businessSchema );

// Category
var categorySchema = new Schema({
    category_name: String,
    created_at: { type : Date },
    updated_at: { type : Date, default: Date.now }
});
var Category = mongoose.model('Category', categorySchema );

// Sub Category
var subCategorySchema = new Schema({
    sub_category_name: String,
    category_id: [{
        type: ObjectId,
        ref: 'Category'
      }],
      created_at: { type : Date },
      updated_at: { type : Date, default: Date.now }
});
var SubCategory = mongoose.model('SubCategory', subCategorySchema );

// City
var citySchema = new Schema({
    name: String,
    state: [{
        type: ObjectId,
        ref: 'State'
      }],
      country: [{
        type: ObjectId,
        ref: 'Country'
      }],
      created_at: { type : Date },
      updated_at: { type : Date, default: Date.now }
});
var City = mongoose.model('City', citySchema );

// State
var stateSchema = new Schema({
    name: String,
      country: [{
        type: ObjectId,
        ref: 'Country'
      }],
      created_at: { type : Date },
      updated_at: { type : Date, default: Date.now }
});
var State = mongoose.model('State', stateSchema );

// Country
var countrySchema = new Schema({
    name: String,
    created_at: { type : Date },
    updated_at: { type : Date, default: Date.now }
});
var Country = mongoose.model('Country', countrySchema );

// User
var userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    mobile_no: String,
    claimed_business: [{
        type: ObjectId,
        ref: 'Business'
      }],
    about_me: String,
    photo: String,
    country: [{
        type: ObjectId,
        ref: 'Country'
      }],
    state: [{
        type: ObjectId,
        ref: 'State'
      }],
    city: [{
        type: ObjectId,
        ref: 'City'
      }],
    status: Number,
    verified: Number,
    last_login: String,
    created_at: { type : Date },
    updated_at: { type : Date, default: Date.now }
});
var User = mongoose.model('User', userSchema );