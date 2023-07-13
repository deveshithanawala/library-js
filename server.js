const express = require('express');
const { get } = require('http');
const app = express();
const books = require('./server/routes/books')

//routes
app.get("/api/v1/library-home-page", (req,res)=>{
    res.send('Here is the home page for the library')
})

app.use("/api/v1/books",books);

// get("api/v1/books")
// get("api/v1/books/:id")
// post("api/v1/books/")
// patch("api/v1/books/:id")
// delete("api/v1/books/:id")

const port = 5001;
app.listen(port,console.log(`App is listening at ${port}...`))