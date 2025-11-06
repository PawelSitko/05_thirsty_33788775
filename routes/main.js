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

router.get('/search_result', function (req, res) {
    res.send("You searched for " + req.query.search_text + " in " + req.query.category);
 });


// Export the router object so index.js can access it
module.exports = router;
