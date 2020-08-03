const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const app= express()

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))
app.use(cors())

app.get("/Convert/:Reamur/:n",(req,res) =>{
  let n=req.params.n
  let celcius= 5/4 *n
  let fahrenheit= 9/4 * n +32
  let kelvin=celcius+273
  let response={
    Reamur:n,
    "Result" : {
      Celcius:celcius,
      fahrenheit:fahrenheit,
      kelvin:kelvin
    }
  }
  res.json(response)
})

app.listen(8000, () => {
  console.log("Server run on port 8000");
})
