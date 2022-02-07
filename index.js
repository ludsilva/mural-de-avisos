const express = require('express');
const app = express();
const port = 5000;
const path = require('path');
const apiRoute = require('./routes/api');

app.use(express.urlencoded({ extended: true })); 
app.use(express.json());


/*Rotas */
app.use('/api', apiRoute); // rota /api/ -> req para modificar 
  //Static files
app.use(express.static(path.join(__dirname, "public")));


app.listen(port, ()=>{
  console.log(`Server running on ${port}`);

});