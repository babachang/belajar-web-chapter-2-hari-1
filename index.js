const express = require ('express')

const app = express()

app.get('/', function(request, response) {
    response.send("hello world")
})
app.get('/about', function(request, response) {
    response.send("Hai")
})
app.get('/test2', function(request, response) {
    response.send("coba lagi")
})
app.listen(5000, function() {
    console.log('Server starting on PORT 5000');
})