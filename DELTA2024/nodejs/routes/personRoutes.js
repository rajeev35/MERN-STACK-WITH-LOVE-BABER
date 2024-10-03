const express = require('express');
const router = express.Router();
const Person = require('../models/person');

router.post('/', async (req,res)=>{
    try{
        const data = req.body
        const newPerson = new Person(data);
        const response = await newPerson.save();
        console.log("Data Saved");
        res.status(200).json(response)

    }catch(err){
        console.log(err);
        res.status(500).json({error: "Internal Error"});

    }
    // newPerson.name = data.name;
    // newPerson.age = data.age;
    // newPerson.gender = data.gender;
    // newPerson.email = data.email;
    // newPerson.mobile = data.mobile
    // newPerson.save((error, savedPerson)=>{
    //     if(error){
    //         console.log("Error saving person", error);
    //         res.status(500).json({error: "Internal server errorr"})
    //     }else{
    //         console.log("Data save successfully");
    //         res.status(200).json(savedPerson);
    //     }
    // })


});

router.get('/', async (req, res) =>{
    try{

        const data = await Person.find();
        console.log('Data find');
        res.status(200).json(data);

    }catch(err){

        console.log(err);
        res.status(500).json({error: "Internal Error"});

    }
});


router.get('/:workType', async (req,res)=>{
    try{
    const workType  = req.params.workType;  //params is like paramater. 
    if(workType == 'chef' || workType == 'manager' || workType == 'waiter'){

      const response = await Person.find({work: workType});
      console.log('Response Fetched');
      res.status(200).json(response);

      
    }else{
      res.status(404).json({error: 'Invalid Work Type'})
    }

    }catch(err){
      console.log(err);
      res.status(500).json({error: "Internal Error"});

    }
});

router.put('/:id', async (req,res)=>{
    try{
      const personId = req.params.id;
      const updatePersonData = req.body;
  
      const response = await Person.findByIdAndUpdate(personId, updatePersonData,{
          new:true,
          runValidators: true,
      })
  
      if(!response){
          return res.status(404).json({error: 'Person Not found'});
      }
  
      console.log('data Updated');
      res.status(200).json(response);
    }catch(err){
      console.log(err);
      res.status(500).json({error: "Internal Error"});
    }
  })

  router.delete('/:id', async(req,res)=>{
    try{

        const personId = req.params.id;
        const response = await Person.findByIdAndDelete(personId);
        if(!response){
            return res.status(404).json({error: 'Person Not found'});
        }
      console.log('data Deleted');
      res.status(200).json({message: 'person deleted successfully'});

    }catch(err){
        console.log(err);
        res.status(500).json({error: "Internal Error"});
    }
  })

module.exports = router;