const http = require("http");

function requestHandler(req, res) {
  console.log(req.url, req.method, req.headers);
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");

  // routing
  if (req.url === "/") {
    res.write("<body><h1>Welcome to the Home Page!</h1></body>");
  } else if (req.url.toLowerCase() === "/about") {
    res.write("<body><h1>About Us</h1><p>This is the about page.</p></body>");
  } else {
    res.write(
      "<body><h1>404 Not Found</h1><p>The page you are looking for does not exist.</p></body>",
    );
  }

  res.write("<body><h2>my Node.js Server!</h2></body>");
  res.write("</html>");
  res.end();
}

const PORT = 3000;
const server = http.createServer(requestHandler);

server.listen(PORT, () => {
  console.log("Server started on", PORT);
});
