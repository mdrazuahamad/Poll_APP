const {Schema,model} = require('mongoose')

const pollSchema = new Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type: String,
        required:true,
        trim:true
    },
    totalVote:Number,
    Option: {
        type:[{
            name:String,
            vote:Number
        }]
    }
})



const Poll = model('Poll', pollSchema)

module.exports = Poll