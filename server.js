const http = require("http");

//to make server  take call back function
const server = http.createServer((req, res) => {
  res.write("welcome to the server of node js");
  res.end();
});

// علشان اشغل ال server
// take port and call back function
server.listen(3000, () => {
  console.log("server is runing successfully");
});
