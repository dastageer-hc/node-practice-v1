const http = require("http");

const characters = [
  { name: "Harry Potter", age: 11 },
  { name: "Hermione Granger", age: 11 },
  { name: "Ron Weasley", age: 11 },
  { name: "Albus Dumbledore", age: 115 },
  { name: "Severus Snape", age: 31 },
  { name: "Rubeus Hagrid", age: 63 },
  { name: "Draco Malfoy", age: 11 },
  { name: "Minerva McGonagall", age: 70 },
];

const server = http.createServer((req, res) => {
  if (req.url === "/harry-potter-characters" && req.method === "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(characters));
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("Sorry, no special coffee here!");
  }
});
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
