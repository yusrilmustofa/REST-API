const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const app= express()

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))
app.use(cors())

app.post("/bujursangkar", (req,res)=>{
  let panjang =Number(req.body.panjang)
  let lebar= Number(req.body.lebar)
  let luas = panjang * lebar
  let keliling = 2* (panjang + lebar)

  let response = {
    Panjang: panjang,
    Lebar: lebar,
    Luas: luas,
    Keliling: keliling
  }
  res.json(response)
})
app.listen(8000, () => {
  console.log("Server run on port 8000");
})
