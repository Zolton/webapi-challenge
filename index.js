require("dotenv").config();
const port = process.env.PORT;
const express = require("express");
const server = express();
const array = require("./database");
server.use(express.json());

function queryReader(req, res, next) {
  req.completed = req.query.completed;
  if (req.completed === true) {
    console.log(req.completed);
    next();
  }
}

server.get("/", (req, res) => {
  res.status(200).json(array);
});

server.post("/", (req, res) => {
  newPerson = req.body;
  newPerson.id = array.length + 1;
  array.push(newPerson);
  res.status(200).json(newPerson);
});

server.delete("/:id", (req, res) => {
  let id = req.params.id;
  const result = array.filter(test => test.id == id);
  result.map(id => (end = id.id - 1));
  console.log(end);
  array.splice(end, 1);
  res.status(200).json(array);
});

// 1st parameter of splice: where to cut
// 2nd: how much to cut
// 3rd: what to put in the hole

server.put("/:id", (req, res) => {
  const replacement = req.body;
  const id = req.params.id;
  let newId = id - 1;
  replacement.id = parseInt(id);
  array.splice(newId, 1, { replacement });
  res.status(200).json(array);
});

server.get("/chores/:id", (req, res) => {
  let id = req.params.id;
  const result = array.filter(test => test.id == id);
  if (result.length < 1) {
    res.status(404).json({ Person: "Not Found" });
  } else {
    result.map(chores => {
      return (result2 = chores.chores);
    });
  }
  res.status(200).json(result2);
});

// WIP - don't understand how query strings work
server.get("/test", (req, res) => {
  completed = req.query.completed;
  let task = [];
  if (completed == "true") {
    const result3 = array.filter(user => user.chores.filter(test=>{if (test.completed == true){
       console.log(test)
        res.status(200).json(test)
    }}))
   // console.log("result", result3);
    //   tasks.filter(test=>result3 = test.completed)
    //   console.log(result3)
   // res.status(200).json(result3);
  }
});

server.listen(port, () => {
  console.log("Server running on port 8000");
});
