const fs = require("fs");

const calRequest = (req, res) => {
  const body = [];
  req.on("data", (chunk) => {
    body.push(chunk);
  });
  req.on("end", () => {
    const fullBody = Buffer.concat(body).toString();
    const params = new URLSearchParams(fullBody);
    const bodyObj = Object.fromEntries(params.entries());
    const sum = Number(bodyObj.num1) + Number(bodyObj.num2);

    fs.writeFileSync(
      "result.txt",
      `${bodyObj.num1} + ${bodyObj.num2} = ${sum}`,
      "utf-8",
    );

    const html = `<h1>Result</h1><p>The sum of ${bodyObj.num1} and ${bodyObj.num2} is ${sum}.</p><a href="/calculate">Calculate Again</a>`;
    res.writeHead(200, { "Content-Type": "text/html" });
    return res.end(html);
  });
};

module.exports = { calRequest };
