const express = require('express');
const router = require('./routes/index');

const app= express()
app.use(router)

const port=process.env.PORT || 5000;

const server =app.listen(port,console.log("Started"))

process.on('SIGINT', () => {
  console, log('Closing')
  server.close(() => {
    console.log('Closed')
  })
})
