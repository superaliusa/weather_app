var express = require("express"),
  logger = require('morgan')('dev'),
  server = express();
  server.use(express.static(__dirname+"/public"));
  server.use(logger);
  server.set("port", process.env.Port || 8080);

  server.get("/", home);
  server.get("/weather", weather);

  server.listen(server.get("port"), listenCallBack);

  function home (req, res){
    res.sendFile("/html/index.html", {root: __dirname+"/public"});
  }

  function weather (req, res){
    res.sendFile("/html/weather.html", {root: __dirname+"/public"});
  }

  function listenCallBack(){
    console.log("Now listening on port" + server.get("port"));
  }
