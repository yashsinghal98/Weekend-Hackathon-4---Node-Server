var http = require("http");

const httpServer = http.createServer(handleServer);

function handleServer(req, res) {
  if (req.url === "/welcome") {
    res.write("Welcome to Dominos!");

    res.send();
  } else if (req.url === "/contact") {
    res.write({ phone: "18602100000", email: "guestcaredominos@jublfood.com" });

    res.send();
  } else {
    res.send();
  }
}
httpServer.listen(8081);
module.exports = httpServer;
