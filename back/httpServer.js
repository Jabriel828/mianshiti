const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post('/', (req, res, next) => {
    const {body: {i}} = req
    console.log(`你发来的是${i}`);
    res.end(`你发来的是${i}`)
});


const port = 8081;
app.listen(port, '0.0.0.0', function () {
    console.log('端口', port)
});
