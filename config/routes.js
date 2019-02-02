const axios = require("axios");
const db = require("../database/dbConfig.js");
const bcrypt = require("bcryptjs");
const { authenticate, generateToken } = require("../auth/authenticate");

module.exports = server => {
  server.post("/api/register", register);
  server.post("/api/login", login);
  server.get("/api/jokes", authenticate, getJokes);
};

function register(req, res) {
  const credentials = req.body;
  const hash = bcrypt.hashSync(credentials.password, 16);
  credentials.password = hash;
  db("users")
    .insert(credentials)
    .then(ids => {
      const id = ids[0];
      db("users")
        .where({ id })
        .then(user => {
          const token = generateToken(user);
          res.status(201).json({ username: user[0].username, token });
        })
        .catch(err =>
          res.status(500).json({ message: "cant make username or password", err })
        );
    })
    .catch(err => {
      res.status(500).json({ message: "here is another error", err });
    });
}

function login(req, res) {
  const credentials = req.body;
  db("users")
    .where({ username: credentials.username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(credentials.password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({ message: `Welcome ${user.username}`, token });
      } else {
        res.status(401).json({ message: "NOPE STOP!" });
      }
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

function getJokes(req, res) {
  const requestOptions = {
    headers: { accept: "application/json" }
  };

  axios
    .get("https://icanhazdadjoke.com/search", requestOptions)
    .then(response => {
      res.status(200).json(response.data.results);
    })
    .catch(err => {
      res.status(500).json({ message: "Error Fetching Jokes", error: err });
    });
}

