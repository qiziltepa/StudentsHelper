const express =  require('express')
const app = express();


app.use(express.static('public'))
app.use(express.static('public'))

var PORT = 3000||process.env.PORT;


app.get('/',(req,res)=>{
    res.sendFile('index.html')
})

app.listen(PORT,()=>{
    console.log("localhost:5500");
})