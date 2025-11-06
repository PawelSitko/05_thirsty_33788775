// Create a new router
const express = require("express");
const router = express.Router();

// Define our shop data
var shopData = {
  shopName: "The Steak Shop",
  productCategories: ["Ribeye", "Sirloin", "T-Bone", "Fillet", "Rump"]
};

// Handle the main routes
router.get("/", (req, res) => {
  res.render("index.ejs", shopData);
});

router.get("/about", (req, res) => {
  res.render("about.ejs", shopData);
});

router.get("/search", (req, res) => {
  res.render("search.ejs", shopData);
});

// Show search result (GET version)
router.get('/search_result', (req, res) => {
  res.send('Hello ' + req.query.first + ' ' + req.query.last + ', you are now registered!');
});

// Show the register page
router.get("/register", (req, res) => {
  res.render("register.ejs", shopData);
});

// Handle form submission from register page (POST version)
router.post("/registered", (req, res) => {
  res.send(req.body);
});

// Export the router object so index.js can access it
module.exports = router;
