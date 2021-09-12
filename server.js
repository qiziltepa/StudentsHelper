const express =  require('express')
const app = express();


app.use(express.static('public'))
app.use(express.static('public'))

let port = process.env.PORT || 3000;


app.get('/',(req,res)=>{
    res.sendFile('index.html')
})

app.listen(port,()=>{
    console.log("localhost:5500");
})