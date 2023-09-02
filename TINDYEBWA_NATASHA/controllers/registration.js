const express = require('express');
const Customer = require('../models/registration')
const router = express.Router();




// route
router.get('/', (req, res)=>{
    res.render('registration.pug')
});

router.post('/registration', async(req, res) => {
    try{
        const customer = new Customer(req.body);
        await customer.save();
        // console.log(req.body);
        res.redirect('/')
       
    }catch(error){
        res.status(400).render('registration')
        console.log(error)

    }

});

module.exports = router;