import express from 'express'
 import { Book } from '../models/bookModel.js';
const router = express.Router();
router.post('/', async (req, res) => {
    try {
     console.log("Request body:", req.body); // Log the request body for debugging

        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).send({
                message: 'Send all required fields: title, author, publishYear',
            });
        }

        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
        };

        // const book = await Book.create(newBook);
        // return res.status(200).send(book);
        const book = await Book.create(newBook);
console.log('Saved book:', book);  // This will log the book being saved
return res.status(200).send(book);

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});


router.get('/' , async (req,res)=> {
    try {
        const books = await Book.find({});
        return res.status(200).json({
            count: books.length,
            data : books
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message : error.message})
        
    }
})
router.get('/:id' , async (req,res)=> {
    try {

        const {id} = req.params;
        const books = await Book.findById(id);
        return res.status(200).json(books);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message : error.message})
        
    }
})
router.put('/:id' , async (req,res)=>{
    try {

 if (!req.body.title || !req.body.author || !req.body.publishYear ) {

      return res.status(400).send({
                message: 'Send all required fields: title, author, publishYear',
            });
 }


        const {id} = req.params;
        const result = await Book.findByIdAndUpdate(id,req.body);
if(!result){
    return res.status(404).json({message:'book  can not found'});
}
return res.status(200).send({message : 'Book updated successfully'});
        
    } catch (error) {
        console.log(error.message);
        return res.status(400).send(error.message);
        
    }

});

router.delete('/:id' , async (req,res) => {
    try {
        const {id} = req.params;
        const result= await Book.findByIdAndDelete(id);
        if (!result) {

            return res.status(400).json({message : 'Book not found'});
            
        } else {
            return res.status(200).send({message : 'Book deleted successfuly'})
            
        }
        
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({message:error.message})
    }
})

export default router;