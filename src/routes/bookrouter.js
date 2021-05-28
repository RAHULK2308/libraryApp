const express=require('express');
const booksRouter=express.Router();

function Router(nav,books){

booksRouter.get('/', function(req,res){
    res.render("books",{
        nav,
        title:'Library',
        books
    })
})
booksRouter.get('/:id',function(req,res){
    const id=req.params.id;
    res.render('book',{
        nav,
        title:'Library App',
        book:books[id]
    })
})
return  booksRouter;
}

module.exports=Router;

