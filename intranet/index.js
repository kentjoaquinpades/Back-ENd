const express = require('express'),
    app = express();
require('express-async-errors')


const db =  require ('./db')
    intranetRoutes = require('./controllers/intranet.controller')

//middleware
app.use('/intranet', intranetRoutes)

app.use((err,req,res,next)=>{
    console.log(err)
    res.status(err.status || 500).send('Something went wrong!')
})



db.query("SELECT 1")
   .then(() => {
       console.log('db connection suceeded.')
       app.listen(3002,
           () => console.log('server started'))
   })
   .catch(err => console.log('db connection failed. \n' + err))
