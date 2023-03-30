const express = require('express')
const app = express()
const User = require('./models/user')
const Contact = require('./models/contact')
require('./models')

app.use(express.json())
app.get('/', (req, res) => res.send('Hello World!'))

User.sync({force: true});
Contact.sync({force: true});
 
app.listen(3150, () => {
   console.log(`Server Running On http://lcoalhost:3150`)
})