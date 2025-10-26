const http = require("http");

function requestHandler(req, res) {
  console.log(req.url, req.method, req.headers);
}

const PORT = 3000;
const server = http.createServer(requestHandler);

server.listen(PORT, () => {
  console.log("Server started on", PORT);
});
