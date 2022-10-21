const mongoose = require('mongoose')


const DB = async ()=>{
  const connect =  mongoose.connect(process.env.MONGO_URL)
  console.log(`Data base connected`)
} 

module.exports =DB;