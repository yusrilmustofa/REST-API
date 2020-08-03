const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const app= express()

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))
app.use(cors())

app.get("/Convert/:Celcius/:n",(req,res) =>{
  let n=req.params.n
  let reamur=4/5*n
  let fahrenheit= 9/5 *n+32
  let kelvin=n+273
  let response={
    celcius:n,
    "Result" : {
      Reamur:reamur,
      fahrenheit:fahrenheit,
      kelvin:kelvin
    }
  }
  res.json(response)
})

app.listen(8000, () => {
  console.log("Server run on port 8000");
})
