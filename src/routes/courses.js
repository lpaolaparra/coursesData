var userDB = require('../db/courses');
exports.getCourses = function(req, res, next){
    userDB.getCourses(function(err,courses){
        if(err){
            console.log('Error getting courses');
            return next();
        }
        return courses
    })
}
