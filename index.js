const express = require("express");
const path = require("path");
const db = require("./config/mongoose");
const Contact = require("./models/contact");
const app = express();
const port = 8000;
const contactController = require("./controllers/contact");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded());
app.use(express.static("assets"));

app.get("/", contactController.fetchContact);

app.get("/add", contactController.addForm);

app.get("/edit/", contactController.editContact);

app.post("/edit/", contactController.editFormSubmit);

app.post("/add/create_contact", contactController.addContact);

app.get("/delete/", contactController.deleteContact);

app.listen(port, function (err) {
  if (err) {
    console.log("Error is running the server", err);
  }
  console.log("Yup! my Express Server is running on port", port);
});
