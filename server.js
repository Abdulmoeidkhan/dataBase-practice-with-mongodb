const express=require("express");
const mongoose =require("mongoose");
const app = express();
const PORT = 4000;
const router = require("./routes/api/routes")
const db = require("./config/keys").mongoURI;



const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log("MongoDB Conected")
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};


connectDB()




app.use(express.json())
app.use("/users",router)
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})