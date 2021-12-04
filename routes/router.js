const express = require("express")
const router = express.Router();
const Product = require('../model/product')
const Company = require('../model/company')
const Seller = require('../model/seller')

//PRODUCT

router.post("/product",(req,res)=>{
    const product = new Product(req.body)  
    product.save(function(err,data){
        if(err) {
            console.log(error);
        }
        else {
            res.send("Data inserted");
        }
    })
})

router.get('/product', function(req, res) {
    Product.find(function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    });  
 });

 router.get('/product/:id', function(req, res) {
    const id = req.params.id
    console.log(id)
    Product.findById(id, 
    function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    });  
});

router.delete('/product/:id', function(req, res) {
    const id = req.params.id
    Product.deleteOne({_id:id}, 
    function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send("Data deleted");
        }
    });  
});

router.put('/product/:id', function(req, res) {
    const id = req.params.id
    Product.findByIdAndUpdate(id, 
    req.body, function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
            console.log("Data updated!");
        }
    });  
});

//Company

router.post("/company",(req,res)=>{
    const company = new Company(req.body)  
    company.save(function(err,data){
        if(err) {
            console.log(error);
        }
        else {
            res.send("Data inserted");
        }
    })
})

router.get('/company', function(req, res) {
    Company.find(function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    });  
 });

 router.get('/company/:id', function(req, res) {
    const id = req.params.id
    console.log(id)
    Company.findById(id, 
    function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    });  
});

router.delete('/company/:id', function(req, res) {
    const id = req.params.id
    Company.deleteOne({_id:id}, 
    function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send("Data deleted");
        }
    });  
});

router.put('/company/:id', function(req, res) {
    const id = req.params.id
    Company.findByIdAndUpdate(id, 
    req.body, function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
            console.log("Data updated!");
        }
    });  
});

//Seller

router.post("/seller",(req,res)=>{
    const seller = new Seller(req.body)  
    seller.save(function(err,data){
        if(err) {
            console.log(error);
        }
        else {
            res.send("Data inserted");
        }
    })
})

router.get('/seller', function(req, res) {
    Seller.find(function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    });  
 });

 router.get('/seller/:id', function(req, res) {
    const id = req.params.id
    console.log(id)
    Seller.findById(id, 
    function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    });  
});

router.delete('/seller/:id', function(req, res) {
    const id = req.params.id
    Seller.deleteOne({_id:id}, 
    function(err) {
        if(err){
            console.log(err);
        }
        else{
            res.send("Data deleted");
        }
    });  
});

router.put('/seller/:id', function(req, res) {
    const id = req.params.id
    Seller.findByIdAndUpdate(id, 
    req.body, function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
            console.log("Data updated!");
        }
    });  
});

module.exports = router

