import { serve } from "https://deno.land/std@0.171.0/http/server.ts";

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

const port = 3000;

serve(
  (req) => {
    if (req.url === "/characters" && req.method === "GET") {
      return new Response(JSON.stringify(characters), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } else {
      return new Response("Sorry, no special coffee here!", {
        status: 404,
        headers: { "Content-Type": "text/plain" },
      });
    }
  },
  { port }
);

console.log(`Server running on http://localhost:${port}`);
