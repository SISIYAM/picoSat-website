const express = require("express");
const cors = require("cors");
const connectToMongo = require("./db");
const path = require("path");
const cookieParser = require("cookie-parser");
const expressLayouts = require("express-ejs-layouts");
const session = require("express-session");
const flash = require("connect-flash");
// create express app
const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(expressLayouts);

// falsh
app.use(
  session({
    secret: "marsrover",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(flash());

// connenct mongoDB
connectToMongo();

// constants
const port = process.env.PORT;
const api = require("./routes/api");
const webRoutes = require("./routes/web");

// set EJS as the templating engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// set the layout template
app.set("layout", "layouts/main");

// call api
app.use("/api/v1/", api);

//call web routes
app.use("/", webRoutes);

// start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`http://localhost:${port}`);
});
