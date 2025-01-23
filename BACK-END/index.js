const express = require('express')
const mongoose = require('mongoose');
const app = express()
var cors = require('cors')
const port = 3001



app.use(express.json())
app.use(cors())

const kittySchema = new mongoose.Schema({
  img:String,
  description: String,
  price:Number
  });
 
  
  const Product = mongoose.model('product', kittySchema);


app.get('/', async(req, res) => {
    const data =  await Product.find()
     res.status(200).json(data)
  })
app.get('/:id', async(req, res) => {
    const{id}=req.params
    const data = await Product.findById(id)
    res.send(id)
  })

  app.post('/',async (req, res) => {
    const data = await Product.create(req.body)
    res.send(data)
  })
 
  
  app.put('/', async(req, res) => {
    const{id}=req.params
    const data = await Product.findByIdAndUpdate(id,req.body)
    res.send('Got a PUT request at /user')
  })

  
  app.delete('/:id',async (req, res) => {
    const{id}=req.params
    const data = await Product.findByIdAndDelete(id)
    res.send(data)
  })

app.listen(port, () => {
    mongoose.connect('mongodb+srv://aytenhhbp109:aytenhuseynli3224@bp109.9sxgz.mongodb.net/')
    .then(() => console.log('DB Connected!'))
    .catch((err)=> console.log(err))
  console.log(`Example app listening on port ${port}`)
})