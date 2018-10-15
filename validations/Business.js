function business() { };
business.prototype.constructor = business;

/**************************************************************************
*
* User Signup Validation
*
**************************************************************************/
business.prototype.register =  function(req, res, next) {
    req.checkBody("business_name", "Business Name is required").notEmpty();
    req.checkBody("business_name", "Business Name must only contain alphabets").matches(/^[a-zA-Z ]*$/,"i");
    req.checkBody("business_name", "Business Name must be 3 to 40 chars long").len(3, 40);
    req.checkBody("category_id", "Category is required").notEmpty();
    req.checkBody("address", "Address is required").notEmpty();
    req.checkBody("address", "Address must be atleast 1 to 200 chars long").len(1, 200);
    req.checkBody("city", "City is required").notEmpty();
    req.checkBody("city", "City must only contain alphabets").matches(/^[a-zA-Z ]*$/,"i");
    req.checkBody("city", "City must be atleast 1 to 30 chars long").len(1, 30);
    req.checkBody("state", "State is required").notEmpty();
    req.checkBody("state", "State must only contain alphabets").matches(/^[a-zA-Z ]*$/,"i");
    req.checkBody("state", "State must be atleast 1 to 30 chars long").len(1, 30);
    req.checkBody("country", "Country is required").notEmpty();
    req.checkBody("country", "Country must only contain alphabets").matches(/^[a-zA-Z ]*$/,"i");
    req.checkBody("country", "Country must be atleast 1 to 30 chars long").len(1, 30);
    req.checkBody("pincode", "Pincode is required").notEmpty();
    req.checkBody("pincode", "Pincode is not valid").isNumeric()
    req.checkBody("pincode", "Pincode must be 6 chars long").len(6, 6);
    req.checkBody("website", "Website is required").notEmpty();
    req.checkBody("website", "Website must be atleast 1 to 70 chars long").len(1, 70);
    req.checkBody("email", "Email is required").notEmpty();
    req.checkBody("email", "Enter valid email address").isEmail();
    req.checkBody("email", "Email cannot exceed 320 chars long").len(1, 320);
    req.checkBody("phone_number", "Phone number is required").notEmpty();
    req.checkBody("phone_number", "Phone number valid email address").isNumeric();
    req.checkBody("phone_number", "Phone number cannot exceed 12 chars long").len(1, 12);
    next();
}

/**************************************************************************
*
* User Signup Validation
*
**************************************************************************/
business.prototype.logoupload =  function(req, res, next) {
    next();
}

/**************************************************************************
*
* Add Category
*
**************************************************************************/
business.prototype.addcategory =  function(req, res, next) {
    req.checkBody("category_name", "Category Name is required").notEmpty();
    next();
}

/**************************************************************************
*
* Add Sub Category
*
**************************************************************************/
// business.prototype.addsubcategory =  function(req, res, next) {
//     req.checkBody("category_id", "Category ID is required").notEmpty();
//     req.checkBody("sub_category_name", "Sub Category Name is required").notEmpty();
//     next();
// }

module.exports = new business();