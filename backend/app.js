const express = require("express");
const nodemailer = require("nodemailer");
const path = require("path");
const app = express();
const multer = require("multer");

require("dotenv-expand")(require("dotenv").config());

const transporter = nodemailer.createTransport({
  service: "yahoo",
  auth: {
    user: process.env.SENDER,
    pass: process.env.SENDER_PASSWORD
  }
});
let upload = multer({
  dest: __dirname + "/uploads/"
});

app.use("/public", express.static(path.join(__dirname, "public")));

app.post("/send", upload.none(), (req, res) => {
  console.log(req.body);

  let mailOptions = {
    from: "sk_izsk@yahoo.com",
    to: req.body.email,
    subject: "Welcome Message",
    text: req.body.message
  };
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
});

app.get("/", (req, res) => {
  res.send("hello");
});
app.listen(4000, () => console.log("server started"));
