const express = require('express');
const app = express();
const port =  5000;
const bodyParser  = require('body-parser');



// app.get('/', (res,req)=>{
//     console.log('setup...')
// })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api', require('./src/routes/users').router)



app.listen(port, () => console.log(`listening on port: ${port}`))
