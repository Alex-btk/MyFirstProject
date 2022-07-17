const http = require('http');
const fs = require('fs');


const server = http.createServer((request, response) => { 
    const url = request.url;
    const method = request.method;
    const a = 0;

    if (url === '/') {
        response.write('<html>');
        response.write('<head><title>Enter message</title></head>');
        response.write('<body>');
        response.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>');
        response.write('</body>');
        response.write('</html>');
        return response.end();
    }

    if (url === '/message' && method === 'POST') {
        fs.writeFileSync('message.txt', 'DUMMY');
        response.statusCode = 302;
        response.setHeader('Location', '/');
        return response.end();
    }
    response.setHeader('Content-Type', 'text/html');
    response.write('<html>');
    response.write('<head><title>My first Page</title></head>');
    response.write('<body>');
    response.write('<h1>just some text</h1>');
    response.write('</body>');
    response.write('</html>');
    response.end();
    // process.exit;
});

server.listen(3000);