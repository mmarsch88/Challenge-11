const express = require('express')
//create variables to access htmlRoutes and apiRoutes
const apiRoutes = require("./routes/apiRoutes")
const htmlRoutes = require("./routes/htmlRoutes")

//intialize app
const app = express()
const PORT = process.env.PORT || 3001;

//setup route middleware and connect to routes folder
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

//start server
app.listen(PORT, () => console.log(`app is running and listening on PORT: ${PORT}`))