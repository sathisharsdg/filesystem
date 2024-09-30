const express = require("express");
const app = express();
const multer = require("multer");


const storage = multer.diskStorage({
     destination: "./uploads",
     filename: (req,file,cb)=>{
        cb(null, Date.now(Math.floor(9999)*5) +"-"+ file.originalname)
     }
})


const multiplestorage = multer.diskStorage({
    destination: "./multipleuploads",
    filename: (req,file,cb)=>{
        cb(null, Date.now(Math.floor(9999)*5) +"-"+ file.originalname)
     }
})

const sendfile = multer({storage: storage});
const sendmultipleFile = multer({storage: multiplestorage})

app.post("/api/filesend" , sendfile.single("file"), (req,res)=>{
     res.send("File uploaded correctly....!!")
})

app.post("/api/multifile", sendmultipleFile.array("files", 5) , (req,res)=>{
      res.send("Multiple files uploaded succesfully...")
} )








const port = 5000;

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`)
})