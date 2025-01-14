const http = require("http");
const host = 'localhost';
const port = 8010;

function requestListener(_request, response) {
    response.setHeader("Content-Type", "application/json");
    response.end(JSON.stringify({ message: "I'm OK" }));
  }

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

