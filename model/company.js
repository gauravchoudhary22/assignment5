const mongoose = require("mongoose");

const CompanySchema = mongoose.Schema({
    company_id : String,
    name: String,
    product_ids : [String]
});

module.exports = mongoose.model("Company", CompanySchema);