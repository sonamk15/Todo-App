const express = require('express');
const app = express();
const bodyParser  = require('body-parser');
const morgan = require('morgan');
const fs = require('fs');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const customCss = fs.readFileSync((process.cwd()+"/swagger.css"), 'utf8');

const port =  5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('dev'));

app.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {customCss}));
// import routes
require('./src/routes')(app);

app.listen(port, () =>
  console.log(`listening on port: ${port}`)
)


module.exports = app;