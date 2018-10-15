var mongoose = require('mongoose');
var findOrCreate = require('mongoose-find-or-create');
var slug = require('mongoose-slug-generator');

if(process.env.ENVIRONMENT == 'DEV') {
  mongoose.connect('mongodb://localhost/consumerforum',{ useNewUrlParser: true });
} else if(process.env.ENVIRONMENT == 'STAGE') {
  mongoose.connect('mongodb://kartik:kitrak123@ds225608.mlab.com:25608/heroku_jl98f91c',{ useNewUrlParser: true });
} else if(process.env.ENVIRONMENT == 'PRODUCTION') {
  mongoose.connect('mongodb://kartik:kitrak123@ds225608.mlab.com:25608/heroku_jl98f91c',{ useNewUrlParser: true });
}


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
    business_name: { type : String , unique : true, required : true, index: true },
    slug: { type: String, slug: "business_name" }, 
    category_id: [{
        type: ObjectId,
        ref: 'Category' 
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
    pincode: Number,
    website: String,
    email: String,
    phone_number: String,
    logo: String,
    verified: Boolean,
    claimed: Boolean,
    claimed_by: [{
        type: ObjectId,
        ref: 'User' 
      }],
    active: Boolean,
    created_at: { type : Date },
    updated_at: { type : Date, default: Date.now }
});
businessSchema.plugin(slug);
var Business = mongoose.model('Business', businessSchema );

// Category
var categorySchema = new Schema({
    category_name: { type:String,  unique : true },
    slug: { type: String, slug: "category_name" },
    parent_id :  [{
      type: ObjectId,
      ref: 'Category'
    }],
    created_at: { type : Date },
    updated_at: { type : Date, default: Date.now }
});
categorySchema.plugin(findOrCreate);
categorySchema.plugin(slug);
var Category = mongoose.model('Category', categorySchema );

// Sub Category
// var subCategorySchema = new Schema({
//     sub_category_name: String,
//     slug: { type: String, slug: "sub_category_name" },
//     category_id: [{
//         type: ObjectId,
//         ref: 'Category'
//       }],
//       created_at: { type : Date },
//       updated_at: { type : Date, default: Date.now }
// });
// subCategorySchema.plugin(slug);
// var SubCategory = mongoose.model('SubCategory', subCategorySchema );

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
citySchema.plugin(findOrCreate);
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
stateSchema.plugin(findOrCreate);
var State = mongoose.model('State', stateSchema );

// Country
var countrySchema = new Schema({
    name: String,
    created_at: { type : Date },
    updated_at: { type : Date, default: Date.now }
});
countrySchema.plugin(findOrCreate);
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

module.exports = {
Category:Category,
City:City,
State:State,
Country:Country,
Business:Business
};