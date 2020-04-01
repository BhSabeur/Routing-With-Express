const express = require("express");

const app = express();
let requestAt = new Date().getHours();
console.log(requestAt);
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  if (requestAt < 8 || requestAt > 17)
    res.sendFile(__dirname + "/public/ourServices.html");
  else res.sendFile(__dirname + "/public/home.html");
  console.log("we open from 8 to 17");
});

app.listen(3000, err => {
  if (err) console.log(": server is not running ");
  else console.log("server is running on port 3000 🚀");
});
