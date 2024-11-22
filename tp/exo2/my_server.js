const http = require("http");
const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
    if(req.url.includes('ho')){
            res.writeHead(200);
            res.end("Pere Noel");
            console.log(req.url) + 'mlqksjg'; //pourquoi ça s'affiche pas dans la console?
    } else {
            res.writeHead(404);
            res.end("not good!"); 
    }
    
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

