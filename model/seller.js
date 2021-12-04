const mongoose = require("mongoose");

const SellerSchema = mongoose.Schema({
    seller_id : String,
    name: String,
    product_ids : [String]
});

module.exports = mongoose.model("Seller", SellerSchema);