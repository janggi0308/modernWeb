let express = require("express"); //외부모듈 익스프레스
let app     = express();
const fs = require('fs');
 
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(8888);
console.log("Running...");

app.get("/save", (req, res) => {
    var data = req.param('data');
    fs.writeFileSync("C:/Temp/data.txt", data)
    res.send(data);
  });

  app.get("/get", (req, res) => {
    var data = fs.readFileSync("c:/Temp/index.html", 'utf8');
    res.send(data);
  });

  app.use('/public', express.static(__dirname + '/public'));

  var bodyParser = require('body-parser')
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  app.use(bodyParser.text());

  app.post("/save", (req, res) => {
    var data = req.body.data;
    res.send(data);
  });
  
  app.post("/calc", (req, res) => {
    var data = req.body;
    var result = eval(data);
    res.send(String(result));
  });

  
  