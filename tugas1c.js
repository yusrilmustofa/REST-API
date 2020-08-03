const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const app= express()

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))
app.use(cors())

app.post("/Segitiga", (req,res) =>{
  let alas=Number(req.body.alas)
  let tinggi=Number(req.body.tinggi)
  let luas=1/2 * alas * tinggi
  let volume=alas*tinggi

  let response={
    alas:alas,
    tinggi:tinggi,
    luas:luas,
    volume:volume
  }
  res.json(response)
})
app.listen(8000, () => {
  console.log("Server run on port 8000");
})
