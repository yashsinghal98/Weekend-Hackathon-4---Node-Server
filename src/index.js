var http = require("http");

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
const httpServer = http.createServer(handleServer);
httpServer.listen(8081);
module.exports = httpServer;
