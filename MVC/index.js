const express = require('express')
const connectDB = require('./config/db')
const dotenv = require('dotenv')
const productRouter = require('./routes/productRouter')
const app = express()

dotenv.config()

const port = process.env.PORT || 3000

app.use(express.json())

connectDB()

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use('/api', productRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
