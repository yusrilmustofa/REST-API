const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const app= express()

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))
app.use(cors())

app.post("/Desimal",(req,res) =>{
  let n=Number(req.body.n)
  let B=n.toString(2)
  let O=n.toString(8)
  let Heksa=n.toString(16).toUpperCase()

  let response={
    Desimal:n,
    "Result" : {
      Biner:B,
      Oktal:O,
      Heksa:Heksa
    }
  }
  res.json(response)
})
app.post("/Biner",(req,res)=>{
  let n=Number(req.body.n)
  let D=parseInt(n,2)
  let O=D.toString(8)
  let Heksa=D.toString(16).toUpperCase()

  let response={
    Biner:n,
    Result : {
      Desimal:D,
      Oktal:O,
      Heksa:Heksa
    }
  }
  res.json(response)
})

app.post("/Oktal",(req,res)=>{
  let n=Number(req.body.n)
  let D=parseInt(n,8)
  let B=D.toString(2)
  let Heksa=D.toString(16).toUpperCase()

  let response={
    Oktal:n,
    Result :{
      Desimal:D,
      Biner:B,
      Heksa:Heksa
    }
  }
  res.json(response)
})

app.post("/Heksa",(req,res)=>{
  let n=Number(req.body.n)
  let D=parseInt(n,16)
  let B=D.toString(2)
  let O=D.toString(8)

  let response={
    Heksadesimal:n,
    Result:{
      Desimal:D,
      Biner:B,
      Oktal:O
    }
  }
  res.json(response)
})

app.listen(8000, () => {
  console.log("Server run on port 8000");
})
