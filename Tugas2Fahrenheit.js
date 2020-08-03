const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const app= express()

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))
app.use(cors())

app.get("/Convert/:fahrenheit/:n",(req,res) =>{
  let n=req.params.n
  let C= 5/9 *(n-32)
  let R= 4/9 *(n-32)
  let K=5/9 *(n-32) +273
  let response={
    Reamur:n,
    "Result" : {
      Celcius:C,
      Reamur:R,
      kelvin:K
    }
  }
  res.json(response)
})

app.listen(8000, () => {
  console.log("Server run on port 8000");
})
