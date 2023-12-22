const express = require("express");
const app = express();
const port = 8000;

app.use(express.urlencoded({extended : true}));

app.get("/register",(req,res) => {
    let {user,password} = req.query;
    res.send(`standard GET request  welcome ${user} and your password is ${password}`);
});

app.post("/register",(req,res) => {
    let {user,password} = req.body;
    res.send(`standard post request welcome ${user} and your password is ${password}`);
})

app.listen(port,() => {
    console.log(`istening the port no ${port}`);
})