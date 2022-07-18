const express = require("express");
const path = require("path");
const app = express();
const port = 8000;

//EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) //for serving static files
app.use(express.urlencoded());

//PUG SPECIFIC CONFIGURATION
app.set('view engine', 'pug') //set the template engine pug
app.set('views', path.join(__dirname, 'views')) //set the views directory

//ENDPOINTS
app.get('/', (req, res)=>{
  const params = {};
  res.status(200).render('home.pug', params);
});

app.get('/contact', (req, res)=>{
  const params = {};
  res.status(200).render('contact.pug', params);
});

//START THE SERVER
app.listen(port, ()=>{
  console.log(`The application started sucessfully on port ${port}`)
});