const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const app= express()

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))
app.use(cors())

app.post("/Persegi", (req,res) =>{
  let sisi =Number(req.body.sisi)
  let panjang =Number(req.body.panjang)
  let lebar= Number(req.body.lebar)
  let tinggi =Number(req.body.tinggi)
  let luas = sisi * sisi
  let volume = panjang * lebar * tinggi

  let response = {
    Sisi:sisi,
    Panjang:panjang,
    Lebar:lebar,
    Tinggi:tinggi,
    Luas:luas,
    volume:volume
  }
  res.json(response)
})
app.listen(8000, () => {
  console.log("Server run on port 8000");
})
