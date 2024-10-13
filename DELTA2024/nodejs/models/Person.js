const { string } = require('i/lib/util');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
//define the person schema 

const personSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true

    }, 
    age:{
        type: Number,
        require: true
    },
    work: {
        type: String,
        enum: ['chef', 'waiter', 'manager'],
        require: true

    },
    mobile: {
        type: String,
        require: true
    },

    email: {
       type: String,
       require: true,
       unique: true
    },

    address:{
        type: String,
        require: true
    },

    salary: {
        type: Number,
        require: true
    },

    username: {
        required: true,
        type: String

    },
    password:{
        required: true,
        type: String
    }

})



personSchema.pre('save',async function(next){
    const person = this;
    // Hash the password only if it has been modified (or is new)
    if(!person.isModified('password')) return next();
    try{

        // hash password generate
        const salt = await bcrypt.genSalt(10);

        // hash password 
        const hashedPassword = await bcrypt.hash(person.password,salt);
        person.password = hashedPassword;

         next();
    }catch(err){

        return next(err);

    }
})

personSchema.methods.comparePassword = async function(candidatePassword){
    try{
         
        const isMatch = await bcrypt.compare(candidatePassword, this.password);
        return isMatch;
    }catch(err){
        throw err;
    }
}
const Person = mongoose.model('person', personSchema);
module.exports = Person;