
const express=require('express');
const authorsRouter=express.Router();


function Router(nav,authors){
 
        authorsRouter.get('/', function(req,res){
        res.render("authors",{
            
            nav,
            title:'Library',
             authors
            
        })
        res.end()

    })
 authorsRouter.get('/:id',function(req,res){
    const id=req.params.id;
    res.render('author',{
        
       nav,
      title:'Library App',
     author:authors[id]
     })
 })
return  authorsRouter;
}

module.exports=Router;

