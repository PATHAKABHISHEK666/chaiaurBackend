// const express = require("express");

import express from "express";
const app = express();

// app.get("/", (req, res) => {
//   res.send("Server is Ready");
// });

// LIST OF  Jokes

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      name: "Programmer Joke",
      joke: "Why do programmers prefer dark mode? Because light attracts bugs!",
    },
    {
      id: 2,
      name: "Math Joke",
      joke: "Why was the equal sign so humble? Because it knew it wasn’t less than or greater than anyone else.",
    },
    {
      id: 3,
      name: "Dad Joke",
      joke: "I only know 25 letters of the alphabet. I don’t know y.",
    },
    {
      id: 4,
      name: "Coffee Joke",
      joke: "Why did the coffee file a police report? It got mugged.",
    },
    {
      id: 5,
      name: "Computer Joke",
      joke: "Why was the computer cold? It left its Windows open.",
    },
    {
      id: 6,
      name: "Science Joke",
      joke: "Why can’t you trust atoms? Because they make up everything!",
    },
    {
      id: 7,
      name: "Work Joke",
      joke: "Why don’t scientists trust stairs? Because they’re always up to something.",
    },
    {
      id: 8,
      name: "Animal Joke",
      joke: "Why don’t cows have any money? Because farmers milk them dry.",
    },
    {
      id: 9,
      name: "School Joke",
      joke: "Why did the student eat his homework? Because the teacher said it was a piece of cake.",
    },
    {
      id: 10,
      name: "Food Joke",
      joke: "Why don’t eggs tell jokes? They’d crack each other up.",
    },
  ];

  res.send(jokes);
});
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running at https://localhost:${port}`);
});
