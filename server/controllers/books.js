const Books = require("../models/books")

const getAllBooks = async (req,res) => {
    try{
        const getAllBooks = await Books.find({})
        res.status(200).json(getAllBooks)
    }
    catch(error){
        res.status(500).json({msg:error})
    }
   
}
const getBooksById = async (req,res)=>{
    try{
        const{id:BookId} = req.params
        const getBooksById = await Books.findOne({_id:BookId})
        if(!getBooksById){
            return res.status(404).json({msg:`No book has been found with this id ${BookId}`})
        }
        res.status(200).json(getBooksById)
    }catch(error){
        res.status(500).json({msg:error})
    }
    
}

const createNewBooks = async (req,res)=>{
  try{
    const createNewBooks = await Books.create(req.body)
    res.status(200).json(createNewBooks)
  }catch{
    res.status(500).json({msg:error})
  }
}

const updateBookById = async (req,res)=>{
    try{
        const{id:BookId} = req.params
        const updateBookById = await Books.findOneAndUpdate({_id:BookId},req.body,{
            new:true,
            runValidators:true
        })
        if(!updateBookById){
           return res.status(404).json({msg:`Can't find book with ${BookId}`})

        }
        res.status(200).json(updateBookById)

    }catch(error){
        res.status(500).json({msg:error})
    }
}
const deleteBookById = async (req,res)=>{
    try{
    const {id:BookId} = req.params
    const deleteBookById = await Books.findOneAndDelete({_id:BookId})
    if(!deleteBookById){
        return res.status(404).json({msg:`Can't find book with ${BookId}`})
    }
    res.status(200).json(deleteBookById)
    }
    catch(error){
    res.status(500).json({msg:error})
    }   
}

module.exports = 
{   getAllBooks
    ,getBooksById
    , createNewBooks
    , updateBookById
    , deleteBookById
};