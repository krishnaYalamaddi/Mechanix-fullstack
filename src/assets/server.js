import express from 'express';
import path from "path";
import bodyParser, { json, urlencoded } from 'body-parser';
import { connect, mongo, Schema } from "mongoose";

var db = connect("mongodb://localhost:27017/AngularCRUD",function(err, response){
    if(err){console.log(err);}
    else{console.log('connected to' + db, '+',response);}
});

var app = express;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(json({limit:'5mb'}));
app.use(urlencoded({extended:true}));

app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin','http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, OPTIONS, DELETE, PATCH');
    res.setHeader('Access-Control-Allow-Headers','X-Requested-With, content-type');
    res.setHeader('Access-Control-Allow-Credentials',true);
    next();
})

var schema = mongo.schema;

var UserSchema = new Schema({
    name: { type: String },
    address: { type : String}
},{versionKey: false});

var model = mongo.model('users', UserSchema, 'users');

app.post("/api/SaveUser", function(req,res){
    var mod = new model(req.body);
    if(req.body.mode == "Save"){
        mode.save(function(err,data){
            if(err){
                res.send(err);
            }
            else{
                res.send({data:"Record has been Inserted......!!"});
            }
        })
    }
    else{
        model.findIdAndUpdate(req.body.id, {name: req.body.name, address: req.body.address}),
        function(err,data){
            if(err){
                res.send(err);
            }
            else{
                res.send({data:"Record has been updated...!!"});
            }
        }
    }
})