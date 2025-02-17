const express = require('express');
const Book = require('./book.model');
const { postABook, getAllBooks, getSingleBook, UpdateBook, deleteABook } = require('./book.controller');
const verifyAdminToken = require('../middleware/verifyAdminToken');
const router = express.Router();



// frontend => backend server  => controller => book schema => database => send to server => back to the frontend
//post = when a submit something frontend to db
// get = when something back from db
//put/patch when edit or update something
// delete = when delete something

//post a book;
// router.post("/create-book", verifyAdminToken ,postABook)
router.post("/create-book", verifyAdminToken, postABook)


//get all books
router.get("/", getAllBooks);

//single book endpoint
router.get("/:id",getSingleBook);

//update book endpoint
router.put("/edit/:id", UpdateBook);


//delete book
router.delete("/:id",deleteABook);

module.exports = router;
