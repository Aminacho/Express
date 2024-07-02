const express = require("express");
const app = express();
// write your middleware here
//to fix ejs variable
app.set("view engine", "ejs");
//to read static files: css images
app.use(express.static("public"));

// verify working houts middleware
function timeSlot(req, res, next) {
  let date = new Date();
  let day = date.getDay();
  let hour = date.getHours();
  if (day >= 1 && day >= 5 && hour <= 9 && hour >= 17) {
    return next();
  } else {
    return res.send(
      "You passed our working hours : from Monday to Friday ,from 09h to 17h"
    );
  }
}

// home page route here => path : /
app.get("/", (req, res) => {
  res.render("home");
});

// services page route here => path : /services
app.get("/services", (req, res) => {
  res.render("services");
});

// contact page route here => path : /contact
app.get("/contact", (req, res) => {
  res.render("contact");
});

// listen to your application here
app.listen(5000, (err) => {
  if (err) throw err;
  console.log("server is up and running");
});
