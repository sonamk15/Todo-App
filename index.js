const express = require('express');
const app = express();
const bodyParser  = require('body-parser');
const morgan = require('morgan');
const port =  5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('dev'));
app.use('/api', require('./src/routes/todo').router);
app.use('/api', require('./src/routes/users').router);


app.listen(port, () =>
  console.log(`listening on port: ${port}`)
)
