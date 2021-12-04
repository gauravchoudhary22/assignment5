const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    product_id : String,
    title : String,
    price : Number,
    category : [String],
    company_id : String,
    seller_id : [String]
});

module.exports = mongoose.model("Product", ProductSchema);