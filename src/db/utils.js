var MongoClient = require('mongodb').MongoClient;

var db;

exports.connectDB = function(callback){
    MongoClient.connect("mongodb://localhost:27017/NodeMongoDB",function(err,dbConnection){
        db = dbConnection;
        callback(err,dbConnection);
    });
}

exports.getDbConnection = function(){
    return db;
}