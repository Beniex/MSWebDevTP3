const http = require("node:http");
const fs= require("node:fs/promises");

const host = "localhost";
const port = 8000;

async function requestListener(request, response) {
  response.setHeader("Content-Type", "text/html");
  try {
    const contents = await fs.readFile("./exo3/index.html", "utf8");
    if( request.url.includes('el')){
      response.writeHead(500);
      response.end(contents);
    } else {
      response.writeHead(404);
      response.end('not good at all!');
    }

  } catch (error) {
    console.error(error);
    response.writeHead(500);
    return response.end(`<html><p>500: INTERNAL SERVER ERROR</p></html>`);
  }
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
