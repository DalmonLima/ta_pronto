const express = require('express')
const app = express()
const port = 8080
const fs = require('fs')
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/orders',function(req,res){

    var reqData =  JSON.stringify(req.body.data);

    console.log(reqData);

    storeData(reqData, "/orders");

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(data));
    res.end();

});

app.get("/", (req, res) => {
    console.log("Root requested");
    res.end('Hello World!');
});

app.get("/orders", (req, res) => {

    const orders = () => fs.readFileSync(__dirname + '/orders.json', { endoding: 'utf8'})

    const ordersRead = JSON.parse(orders())

    /*Logging for visualization*/
    res.end(JSON.stringify(ordersRead));
    console.log("Orders list requested")
});


app.post("/orders", (req, res) => {

    fs.writeFile(__dirname + '/orders.json', JSON.stringify(data), function writeJSON(err) {
        if (err) return console.log(err);
        console.log(JSON.stringify(data));
      });

    console.log("Orders list updated")

});


app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  });


// Functions