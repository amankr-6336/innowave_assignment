const mongoose=require('mongoose');

const testSchema=mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: String, required: true },
})

module.exports=mongoose.model('testcase',testSchema)