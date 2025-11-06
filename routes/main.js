// Create a new router
const express = require("express");
const router = express.Router();


// Define our shop data
var shopData = {
  shopName: "The Steak Shop",
  productCategories: ["Ribeye", "Sirloin", "T-Bone", "Fillet", "Rump"],

  //new shops 
  shops: [
    {
      location: "London",
      manager: "Pawel Sitko",
      address: "3 Oxford Street, London W1D 2LT"
    },
    {
      location: "Manchester",
      manager: "Borris Johnson",
      address: "45 Deansgate, Manchester M3 2BB"
    },
    {
      location: "Birmingham",
      manager: "Ibrahim Kamara",
      address: "78 Broad Street, Birmingham B15 1AU"
    }
  ]
};


//survey result
router.post("/survey_result", (req, res) => {
  const data = {
    shopName: shopData.shopName,
    first: req.body.first,
    last: req.body.last,
    email: req.body.email,
    age: req.body.age,
    drink: req.body.drink,
    student: req.body.student ? "Yes" : "No"
  };

  
  res.render("survey_result.ejs", data);
});


// Handle the main routes
router.get("/", (req, res) => {
  res.render("index.ejs", shopData);
});

router.get("/survey", (req, res) => {
  res.render("survey.ejs", shopData);
});

router.get("/about", (req, res) => {
  res.render("about.ejs", shopData);
});


router.get("/search", (req, res) => {
  res.render("search.ejs", shopData);
});

// Handle search result (GET method)
router.get("/search_result", (req, res) => {
  res.send("You searched for " + req.query.search_text + " in " + req.query.category);
});

// Show the register page (GET)
router.get("/register", (req, res) => {
  res.render("register.ejs", shopData);
});

// Handle form submission from register page (POST)
router.post("/registered", (req, res) => {
  res.send("Hello " + req.body.first + " " + req.body.last + ", you are now registered! We will now send an email confirmation to you at " + req.body.email+ "");
});

// Export the router object so index.js can access it
module.exports = router;
