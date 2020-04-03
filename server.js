const express = require("express");

const app = express();
app.use(
  (middleware = (req, resp, next) => {
    const date = new Date();
    const time = date.getHours();

    if (time >= 8 && time <= 17) next();
    else resp.send("Our office is not open now");
  })
);
app.get("/", (req, resp) => {
  resp.sendFile(__dirname + "/public/home.html");
});
app.get("/services", (req, resp) => {
  resp.sendFile(__dirname + "/public/ourServices.html");
});
app.get("/contact", (req, resp) => {
  resp.sendFile(__dirname + "/public/contact.html");
});

app.listen(3000, err => {
  if (err) console.log(": server is not running ");
  else console.log("server is running on port 3000 🚀");
});
