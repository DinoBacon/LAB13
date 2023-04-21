const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/users', require('./routes/api/users'))

app.listen(3008, () => {
    console.log('Sever started on port 3008')
})


