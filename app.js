const express=require('express');
const app=new express();
const nav=[{
    link:'/books',name:'Books'
},
    {
        link:'/authors', name:'Authors'
},
{
        link:'/addbooks', name:'ADD BOOK'
},
{
        link:'/addauthors', name:'ADD AUTHOR'
},
{
        link:'/login', name:'LOG IN'
},
{
         link:'/signup', name:' SIGN UP'
}];

 
const authors=require('./public/js/authors')
const books=require('./public/js/books')

const port=process.env.port||5000;

const booksRouter=require('./src/routes/bookrouter')(nav,books);
const authorsRouter=require('./src/routes/authorsrouter')(nav,authors);
const SignupRouter=require('./src/routes/signuprouter')(nav);
const loginRouter=require('./src/routes/loginrouter')(nav);
const AddauthorsRouter=require('./src/routes/addauthorsrouter')(nav,authors);
const AddbooksRouter=require('./src/routes/addbooksrouter')(nav,books)

app.use('/addauthors',AddauthorsRouter);
app.use('/books',booksRouter)
app.use('/authors',authorsRouter)
app.use('/signup',SignupRouter)
app.use('/login',loginRouter)
app.use('/addbooks',AddbooksRouter)

app.use(express.static(__dirname+'/public'));

app.set('view engine','ejs');
app.set('views','./src/views');

app.get('/',function(req,res){
    res.render("index",{
        nav,
        title:'Library App'
    });
});


app.listen(port, ()=>{
    console.log("THE SERVER IS READY AT "+port)
});
