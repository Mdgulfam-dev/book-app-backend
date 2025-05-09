const express = require("express");
const app = express();
const cors = require('cors');

const path = require('path');
require('dotenv').config()
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;
const_dirname = path.dirname("");


//middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend/dist')));

//routes

const bookRoutes = require('./src/books/book.route')
const orderRoutes = require("./src/orders/order.route")
const userRoutes = require("./src/users/user.route")
const adminRoutes = require("./src/stats/admin.stats")

app.use(cors({
  origin:['http://localhost:5173', 'https://book-app-frontend-fcjl-70i7i4vzk-md-gulfams-projects.vercel.app'],
  credentials: true
}));
app.use("/api/books", bookRoutes );
app.use("/api/orders", orderRoutes );
app.use("/api/auth", userRoutes );
app.use("/api/admin", adminRoutes );



//routes
// const bookRoutes = require('./src/books/book.route');
// app.use(cors({
//   origin: ['http://localhost:5173'], 
//   credentials: true
// }));

// app.use("/api/books", bookRoutes); 




async function main() {
  await mongoose.connect(process.env.DB_URL);
  app.use("/", (req, res) => {
    res.send("Book Store Server is running!");
  });
}


main().then(() => console.log("Mongodb connect successfully!")).catch(err => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);


});
