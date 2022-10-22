const mongoose = require('mongoose')


const DB = async ()=>{
  const connect =  mongoose.connect(process.env.MONGO_URL)
  console.log(`Database connected`)
} 

module.exports =DB;