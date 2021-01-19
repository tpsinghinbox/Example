const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
const morgan = (process.env.NODE_ENV === "production")?null:require('morgan')
const connect = require('./database/db')
const authRoutes = require('./routes/auth')
const userDataRoutes = require('./routes/userData')

const config = require("./config/key")


app.use(cors())

if (process.env.NODE_ENV !== "production") {
  app.use(morgan('dev'))
}

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use("/api/auth", authRoutes)
app.use("/api/user", userDataRoutes)


// Below code was the error in heroku

// // catch 404
// app.use(function (req, res, next) {
//   res.status(404).send();
// })

// // global error handler
// app.use(function (err, req, res, next) {
//   res.status(500).send();
// })

connect();

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {




  if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, '../client/build')));

    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    });
}

////"heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix client && npm run build --prefix client"
  // app.use(express.static(path.join(__dirname, '/../client/build')));
  // app.get('*', (req, res) => {
  //   res.sendFile(path.join(`${__dirname}/../client/build/index.html`));
  // });

  // // Set static folder
 // app.use(express.static("client/build"))
  
  // // index.html for all page routes
  // app.get("*", (req, res) => {
  //  //res.sendFile(path.join(__dirname, './client/build/index.html'));
   // res.sendFile(path.resolve(__dirname, "../client", "build", "index.html")) 
   //res.sendFile(path.join(__dirname, "client", "build", "index.html"))
  //})
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log("listning on port "+PORT))
