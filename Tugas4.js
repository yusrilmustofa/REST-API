const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const app= express()

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))
app.use(cors())

app.post("/Bmi",(req,res)=>{
  let tinggi=Number(req.body.tinggi)
  let berat=Number(req.body.berat)
  let bmi= berat/tinggi**2
  let status=""
  if (bmi < 18.5) {
    status:"Kekurangan Berat Badan"
  }else if (bmi >= 18.5 && bmi < 25) {
    status:"Normal(Ideal)"
  }else if (bmi >=25 && bmi <30) {
    status: "Kelebihan Berat"
  }else {
    status:"Kegemukan"
  }
  let response={
    Tinggi:tinggi,
    Berat:berat,
    Bmi:bmi,
    Status:status
  }
  res.json(response)
})
app.listen(8000, () => {
  console.log("Server run on port 8000");
})
