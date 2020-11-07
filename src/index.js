const http = require("http");

const httpServer = http.createServer((req, res) => {
  if (req.url === "/welcome") {
    res.write("Welcome to Dominos!");
    res.setStatus(200);
    res.send();
  } else if (req.url === "/contact") {
    res.write({ phone: "18602100000", email: "guestcaredominos@jublfood.com" });
    res.setStatus(200);
    res.send();
  } else {
    res.setStatus(404);
    res.send();
  }
});
httpServer.listen(8081);
module.exports = httpServer;
