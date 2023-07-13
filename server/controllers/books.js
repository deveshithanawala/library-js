const getAllBooks = (req,res) => {
    res.send("Here we are getting all books ")
}
const getBooksById = (req,res)=>{
    res.send('Here is a single book')
}
const createNewBooks = (req,res)=>{
    res.send('Here is a create a new  book')
}
const updateBookById = (req,res)=>{
    res.send('Here is updating a new book')
}
const deleteBookById =(req,res)=>{
    res.send('Here is Deleting Book By Id')
}

module.exports = 
{   getAllBooks
    ,getBooksById
    , createNewBooks
    , updateBookById
    , deleteBookById
};