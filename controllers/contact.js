const express = require("express");
const Contact = require("../models/contact");

exports.addContact = (req, res) => {
  var x = req.body.phone;

  var new_contact = new Contact({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
  });

  new_contact.save((err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/");
    }
  });
};

exports.fetchContact = (req, res) => {
  Contact.find().then((contacts) => {
    res.render("home", {
      contacts: contacts,
    });
  });
};

exports.deleteContact = (req, res) => {
  Contact.findByIdAndDelete(req.query.id, (error) => {
    if (error) console.log(error);
    else res.redirect("/");
  });
};

exports.addForm = (req, res) => {
  Contact.find().then((contacts) => {
    res.render("newContact", {
      contacts: contacts,
    });
  });
};

exports.editContact = (req, res) => {
  Contact.findById(req.query.id, (error, data) => {
    if (error) console.log(error);
    else
      res.render("edit", {
        data: data,
      });
  });
};

exports.editFormSubmit = (req, res) => {
  Contact.findByIdAndUpdate(
    req.query.id,
    { name: req.body.name, email: req.body.email, phone: req.body.phone },
    (error) => {
      if (error) console.log(error);
      else res.redirect("/");
    }
  );
};
