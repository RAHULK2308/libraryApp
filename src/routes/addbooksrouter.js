const express=require('express');
const AddbooksRouter=express.Router();



var bodyParser = require('body-parser');  

// Create application/x-www-form-urlencoded parser  
var urlencodedParser = bodyParser.urlencoded({ extended: false })  
AddbooksRouter.use(express.static(__dirname+'/public'));  
AddbooksRouter.use(bodyParser.text());

function Router(nav,books){
    
 AddbooksRouter.get('/', function(req,res){
    res.render("addbooks",{
        nav,
        title:'Library',
        
    })
})


AddbooksRouter.post('/', urlencodedParser, function (req, res) {  
    // Prepare output in JSON format      
    books.push(req.body)
    console.log("book is sucessfully added")
    res.redirect('/books'); 
    res.end();
    }) 
    
    
return AddbooksRouter;
}
module.exports=Router;