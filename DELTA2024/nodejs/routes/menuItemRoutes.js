const express = require('express');
const router = express.Router();

const MenuItem = require('../models/MenuItem');


router.get('/', async (req,res)=>{

    try{
        const data = await MenuItem.find();
        console.log('Menu data find', data);
        res.status(200).json(data);

    }catch(err){

        console.log(err);
        res.status(500).json({error: "Internal Error"});

    }

});
router.post('/', async (req,res)=>{
    try{

        const data = req.body
        const MenuData = new MenuItem(data);
        const response = await MenuData.save();
        console.log("Data Saved");
        res.status(200).json(response)


        

    }catch(err){
        console.log(err);
        res.status(500).json({error: "Internal Error"});
    }
});





module.exports = router;