const http = require('http')
const fs = require('fs')

http.createServer(function(req, res) {
    switch(req.url) {
        case '/':
            methodRoute(req, res)
            break

        default:
            res.writeHead(404, {'Content-Type': 'text/html'})
            res.write(JSON.stringify('PATH não encontrado'))
            res.end()
            break; 
    }
}).listen(8080)

function methodRoute(req, res) {
    switch (req.method){
        case 'GET':
            fs.readFile('index.html', function(err, data) {
                res.writeHead(200, {'Content-Type': 'text/html'})
                res.write(data)
                return res.end()
            })
            break

        default:
            fs.readFile('404.html', function(err, data) {
                res.writeHead(404, {'Content-Type': 'text/html'})
                res.write(data)
                return res.end()
            })
            break
    }
}
