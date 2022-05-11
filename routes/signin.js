const express = require('express')
const router = express.Router()

router.get('/signin',async(req,res)=>{
    res.locals.session = req.session;
    const message = req.flash('status');
    res.render('signin',{ message })
});

module.exports = router