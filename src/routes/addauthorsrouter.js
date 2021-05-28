const express=require('express');
const AddauthorsRouter=express.Router();



var bodyParser = require('body-parser');  
// Create application/x-www-form-urlencoded parser  
var urlencodedParser = bodyParser.urlencoded({ extended: false })  
AddauthorsRouter.use(express.static(__dirname+'/public'));  
AddauthorsRouter.use(bodyParser.text());

function Router(nav,authors){
    
 AddauthorsRouter.get('/', function(req,res){
    res.render("addauthors",{
        nav,
        title:'Library',
        
    })
})


AddauthorsRouter.post('/', urlencodedParser, function (req, res) {  
    // Prepare output in JSON format      
    authors.push(req.body)
    console.log("Author name is sucessfully added")
    res.redirect('/authors'); 
    res.end();
    }) 
    
    
return AddauthorsRouter;
}
module.exports=Router;