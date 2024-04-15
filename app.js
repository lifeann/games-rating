const {
  defaultRouteController,
  gameRouteController,
  mainRouteController,
  voteRouteController,
} = require("./controllers");
const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  switch (url) {
    case "/":
      mainRouteController(res, "/index.html", ".html");
      break;
    case "/vote":
      voteRouteController(req, res);
      break;
    case "/game":
      gameRouteController(res);
      break;
    default:
      defaultRouteController(res, url);
  }
});

server.listen(3005);
