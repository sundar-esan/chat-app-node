const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.v2dbioe.mongodb.net/chatapp?retryWrites=true&w=majority`,()=>{
    console.log("DB connected")
})


//mongodb+srv://chat:<password>@cluster0.v2dbioe.mongodb.net/?retryWrites=true&w=majority