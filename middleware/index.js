const express = require('express')
const app = express()
const port = 3000


 app.use(express.json())

   const logmiddleware=function(req, res, next){
   console.log('log middleware chal gaya')
      next();
 }

     app.use(logmiddleware)

    const authmiddleware=function(req, res, next){
    console.log('auth middleware chal gaya')
    next();
 }
     app.use(authmiddleware)

  const validationMiddleware=function(req, res, next){
   console.log('validation middleware chal gaya')
   next();
 }
    app.use(validationMiddleware)

    const route=require('./routes/route');
app.use('/api',route);

app.get('/', (req, res) => {
  console.log(req.body)
  res.send('chal gaya')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})