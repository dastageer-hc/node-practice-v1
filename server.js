import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

// Enable CORS
app.use(cors());

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

app.get("/characters", (req, res) => {
  res.json(characters);
});

// Handle all other routes
app.use((req, res) => {
  res
    .status(404)
    .send("Sorry, something either went wonderfully right or horribly wrong ");
});

app.listen(port, () => {});
