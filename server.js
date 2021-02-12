let express = require('express');
let app = express();
let parser = require('body-parser');
let PORT = process.env.PORT || 8080;

app.use(express.static('public'));
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.set('view engine','ejs');

app.get('/', (req,res) => {
    res.status(200);
    res.render(__dirname + '/private/index.ejs');
})

app.use(function(err, req, res, next){
    res.status(err.status || 500);
    res.render(__dirname + '/public/500.ejs');
})
  
app.use(function(req, res){
    res.status(404);
    res.render(__dirname + '/public/404.ejs');
})

app.listen(PORT, _ => {
    console.log('You can view your app at http://localhost:8080')
})