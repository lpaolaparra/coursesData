const utilsDB = require('./utils');

const db = utilsDB.getDbConnection();

exports.getCourses = function(callback){
    var dbo = db.db("coursesData");
    dbo.collection("course").find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        
    });
    return result;
}