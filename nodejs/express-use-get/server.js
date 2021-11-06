let express = require('express');
let app = express();
let port = 3000;

let router = require('./router');

app.use('/test1', function (req, res) {
    res.send('test1');
    res.render('index');
});

app.use(router);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
