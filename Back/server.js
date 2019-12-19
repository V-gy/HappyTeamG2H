const express = require("express");
const app=express();
const parser= require("body-parser");
const connection = require("./conf.js");

app.use (parser.json());


 app.get("/quest/:id", (req,res)=> {
     const sql = "SELECT * FROM quiz_questions INNER JOIN answers ON (answers.question_id = quiz_questions.id) WHERE quiz_questions.id = ?";
    
     connection.query(sql,[parseInt(req.params.id)], (error,results,fields) =>{
         if (error) {
             res.status(501).send("can't find question");
         }else{
             res.json(results)
         }
     });
 });

app.listen(5000, (err)=>{
    if(err){
        console.log("Error: ", error);
    }
    else{
        console.log("server is listening on port 5000");
    }

})