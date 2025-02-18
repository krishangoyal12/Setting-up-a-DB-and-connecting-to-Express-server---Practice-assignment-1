const {connect} = require('mongoose')

const connectToDb = async(url)=>{
    try{
        await connect(url)
    }
    catch(err){
        console.log("Error in connecting with Database")
    }
}

module.exports = connectToDb