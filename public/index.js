const http = require("http");
const fs = require("fs").promises;
var path = require("path");

const server = http.createServer(async function(request, response) {
  // response.writeHead(200, { "Content-Type": "text/plain" });
  let file = "not found";
  console.log(request);
  try {
    file = await fs.readFile("./public/index.html", {
      encoding: "utf-8"
    });
    response.writeHead(200, { "Content-Type": "text/html" });
  } catch (e) {
    response.writeHead(404, { "Content-Type": "text/html" });
    console.log(e);
  }
});

server.listen(3000, () => {
  console.log("Server up");
});
