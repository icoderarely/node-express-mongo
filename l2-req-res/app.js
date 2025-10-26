const http = require("http");

function requestHandler(req, res) {
  console.log(req.url, req.method, req.headers);
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
  res.write("</html>");
  res.end();
}

const PORT = 3000;
const server = http.createServer(requestHandler);

server.listen(PORT, () => {
  console.log("Server started on", PORT);
});
