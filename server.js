const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

//asdasd
app.listen(4000, function () {
    console.log('Example app listening on port 3000!');
});
