require('dotenv').config()
const express =require ('express');
const app = express();
const port= 4000;

{
  app.get('/', (req, res) =>
  res.send('Hello World aaruhi!')
)}
app.get('/twitter', (req, res) => {
  res.send ('hello twitter')})


  app.get('/login', (req, res) => {
    res.send ('PLEASE LOGIN HERE')})

    app.get ('/youtube', (req, res)=>{
      res.send('youtube here')
    })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})