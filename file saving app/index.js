const express= require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.use(express.json());    
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine', 'ejs');


// ...existing code...
app.get('/', (req, res) => {
    fs.readdir(`./files`, function(err, files) {
        res.render("index", { files: files, error: req.query.error });  
    });
});
// files folder se files ko read kerke card display ker rha hai unke naam  k sath

app.get('/files/:filename',function(req, res) {   
fs.readFile(`./files/${req.params.filename}`, 'utf8', function(err, filedata) {
    res.render('show',{filename:req.params.filename ,filedata});   
});
// :filename ban gya ek varialble jisko hum req.params se access kar rahe hain
// filedata mil gaya fs.readfile kerne se jisse filedata variable se bhej diya humne show page par 

})

app.get('/edit/:filename', (req, res) => {
    fs.readFile(`./files/${req.params.filename}`, 'utf8', function(err, filedata) {
        res.render('edit', { filename: req.params.filename, filedata });
    });
});

app.post('/edit', (req, res) => {
    fs.rename(`./files/${req.body.previous}`, `./files/${req.body.new}`, function(err) {
    
            res.redirect("/");
        
    });
});

// ...existing code...
app.post('/create', (req, res) => {
    if (!req.body.title) {
        // Redirect to "/" with error message in query string
        return res.redirect('/?error=Title%20is%20required');
    }
    fs.writeFile (`./files/${req.body.title.split(' ').join('')}.txt`, req.body.details, function(err){
        res.redirect("/")
    });
});
// ...existing code...



app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});