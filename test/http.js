const http = require("http");

const server = http.createServer((req, res) => {
  console.log("new request");
  if (req.url === "/") {
    res.write("hello user");
    res.end();
  } else if (req.url === "/api/app") {
    res.write("customers list");
    res.end();
  }
});

server.listen(8080, () => {
  console.log("server listening on port 8080");
});
