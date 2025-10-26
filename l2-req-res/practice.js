const http = require("http");

const requestHandler = (req, res) => {
  if (req.url === "/" && req.method === "GET") {
    const html = `<html>
      <title>Home Page</title>
      <body>
        <h1>Welcome to the Home Page!</h1>
        <a href="/">Home</a><br/>
        <a href="/men">Men</a><br/>
        <a href="/women">Women</a><br/>
        <a href="/cart">Cart</a><br/>
      </body>
    </html>`;
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    return res.end(html);
  }

  if (req.url === "/men" && req.method === "GET") {
    const html = `<html>
      <title>Men's Section</title>
      <body>
        <h1>Welcome to the Men's Section!</h1>
      </body>
      </html>`;
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    return res.end(html);
  }

  if (req.url === "/women" && req.method === "GET") {
    const html = `<html>
      <title>Women's Section</title>
      <body>
        <h1>Welcome to the Women's Section!</h1>
      </body>
      </html>`;
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    return res.end(html);
  }

  if (req.url === "/cart" && req.method === "GET") {
    const html = `<html>
      <title>Practice Cart</title>
      <body>
        <h1>Your Cart Section!</h1>
        <p>Redirecting to Home in 3 seconds...</p>
        <script>
          setTimeout(() => { window.location.href = "/"; }, 3000);
        </script>
      </body>
      </html>`;
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    return res.end(html);
  }
};

const PORT = 4000;
const server = http.createServer(requestHandler);
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
