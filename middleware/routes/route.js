

const express=require('express');
const router=express.Router();

const authmiddleware = function (req, res, next) {

    req.user = {
        id: 1, 
        role:'hca'
    };

    if(req.user){
        next()
    }
    else{

        res.json({
            success: false,
            message: 'not a valid user'
        })
    }

}

const isstudent = function (req, res, next) {
   if(req.user.role==='student'){
       next()
   }else{
    res.json({
        sucess:false,
        message: 'not a student'
        })
   }
}


const isadmin = function (req, res, next) {
   if(req.user.role==='admin'){
       next()
   }else{
    res.json({
        sucess:false,
        message: 'not a admin'
        })
   }
}



router.get('/student', authmiddleware, isstudent, (req, res) => {

    console.log("i am inside student route");
    res.send("student wala page")

});

router.get('/admin', authmiddleware, isadmin, (req, res) => {

    console.log("i am inside admin route");
    res.send("admin wala page")

});

module.exports=router;