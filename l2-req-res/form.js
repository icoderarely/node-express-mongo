const http = require("http");

function requestHandler(req, res) {
  console.log(req.url, req.method, req.headers);
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");

  // routing
  if (req.url === "/") {
    res.write("<body><h1>Welcome to the Home Page!</h1></body></html>");
    return res.end();
  }

  if (req.url.toLowerCase() === "/form") {
    res.write("<body><h1>Form Page</h1><p>This is the form page.</p></body>");
    res.write("<form action='/submit' method='POST'>");
    res.write("<label for='username'>Username:</label>");
    res.write("<input type='text' name='username' placeholder='Username'/>");
    res.write("<label for='password'>Password:</label>");
    res.write(
      "<input type='password' name='password' placeholder='Password'/>",
    );
    res.write("<button type='submit'>Submit</button></html>");
    return res.end();
  }

  res.write(
    "<body><h1>404 Not Found</h1><p>The page you are looking for does not exist.</p></body>",
  );
  res.write("<body><h2>my Form Node.js Server!</h2></body>");
  res.write("</html>");
  res.end();
}

const PORT = 3000;
const server = http.createServer(requestHandler);

server.listen(PORT, () => {
  console.log("Server started on", PORT);
});
