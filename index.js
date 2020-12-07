const express = require('express');
const app = express();
const bodyParser  = require('body-parser');
const morgan = require('morgan');

const port =  5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('dev'));

// import routes
require('./src/routes')(app);

app.listen(port, () =>
  console.log(`listening on port: ${port}`)
)


module.exports = app;