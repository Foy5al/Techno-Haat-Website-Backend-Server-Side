const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

// thard party middleWare
app.use(cors());
app.use(express.json());

// route
const aboutRoute = require("./Routes/about.route");
const blogRoute = require("./Routes/blog.route");
const contactRoute = require("./Routes/contact.route");
const footerRoute = require("./Routes/footer.route");
const galleryRoute = require("./Routes/gallery.route");
const navRoute = require("./Routes/nav.route");
const navBannerRoute = require("./Routes/navBanner.route");
const projectsRoute = require("./Routes/projects.route");
const randomRoute = require("./Routes/random.route");
const serviceRoute = require("./Routes/service.route");
const teamRoute = require("./Routes/team.route");

app.use("/about", aboutRoute);
app.use("/blog", blogRoute);
app.use("/contact", contactRoute);
app.use("/footer", footerRoute);
app.use("/gallery", galleryRoute);
app.use("/navigation", navRoute);
app.use("/navBanner", navBannerRoute);
app.use("/projects", projectsRoute);
app.use("/random", randomRoute);
app.use("/service", serviceRoute);
app.use("/team", teamRoute);

app.get("/", (req, res) => {
  res.send("<h1>Techno Haat server is connected!!</h1>");
});

module.exports = app;