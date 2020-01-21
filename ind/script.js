// var os = require("os");
// var message = "The platform is ";

// function main(){
//    console.log(message + os.platform());
// }
// main();

var express = require("express");
var app = express();

app.get("/Arman", function(req, res){
   res.send("Hello Arman");
});

app.listen(3000, function(){
   console.log("Example is running on port 3000");
});
