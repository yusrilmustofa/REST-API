const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const app= express()

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))
app.use(cors())

app.get("/Convert/:Kelvin/:n",(req,res) =>{
  let n=req.params.n
  let C= n -273
  let R= 4/5 * (n-273)
  let F=9/5 * (n-273)
  let response={
    Reamur:n,
    "Result" : {
      Celcius:C,
      Reamur:R,
      fahrenheit:F
    }
  }
  res.json(response)
})

app.listen(8000, () => {
  console.log("Server run on port 8000");
})
