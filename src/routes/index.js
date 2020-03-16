const  express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    // da la direccion del archivo que los esta llamando (index.js)
    

    res.render('index.html');
});

// router.get('/test/',(req,res)=>{
//     res.render('index');
// });

module.exports = router;