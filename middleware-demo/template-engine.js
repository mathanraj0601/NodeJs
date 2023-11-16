const express = require('express');
const app = express();

app.set('view engine','pug'); // set view engine as pub for server side rendering
app.set('views','./views'); // set views and their repo location


app.get('/',(req,res)=>{
    res.render('index',{ title:"hello", message:"hello" })
})

const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`Listening in port ${port}`);
})