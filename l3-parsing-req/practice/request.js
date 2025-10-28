const fs = require("fs");
const { calRequest } = require("./calcSum");

const requestHandler = (req, res) => {
  console.log("Request URL:", req.url);
  console.log("Request Method:", req.method);
  if (req.url === "/") {
    const html = `<h1>Welcome</h1><a href="/calculate">Go to Calculate</a>`;
    res.writeHead(200, { "Content-Type": "text/html" });
    return res.end(html);
  }

  if (req.url.toLowerCase() === "/result" && req.method === "POST") {
    return calRequest(req, res);
  }

  if (req.url.toLowerCase() === "/calculate") {
    const html = `<form action="/result" method="POST">
        <label for="num1">Number 1:</label>
        <input type="number" id="num1" name="num1" required><br><br>
        <label for="num2">Number 2:</label>
        <input type="number" id="num2" name="num2" required><br><br>
        <input type="submit" value="Calculate Sum">
        </form>`;
    res.writeHead(200, { "Content-Type": "text/html" });
    return res.end(html);
  }

  // Default case for unmatched URLs
  res.writeHead(404, { "Content-Type": "text/html" });
  res.end("<h1>404 - Page Not Found</h1>");
};

exports.requestHandler = requestHandler;
