//  Imports
const express = require('express');
const app = express();
const port = 3000;

//  Static Files
app.use(express.static('public'));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/img", express.static(__dirname + "public/img"));


//  Set Views
app.set('views', './views');
app.set('view engine', 'ejs');


app.get("/", (req, res) => {
    // res.sendFile(__dirname + "/views/index.html");
    res.render('index', {
        h2: 'This is Home Page'
    });
});

app.get("/about", (req, res) => {
    // res.sendFile(__dirname + "/views/about.html");
    res.render('about', {
        h2: 'This is About Us Page'
    });
});

//  Listen port 3000
app.listen(port, () => console.info(`Listening to port ${port}`));