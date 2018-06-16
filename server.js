const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const flash = require('express-flash');
const PORT = 9000;

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(flash());
app.use(express.static(path.join(__dirname + '/client/public/dist')));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);


app.listen(PORT, () => {
    console.log('server is running Olu', PORT);
})