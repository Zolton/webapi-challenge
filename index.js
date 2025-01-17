require("dotenv").config();
const port = process.env.PORT;
const express = require("express");
const server = express();
const array = require("./database");
server.use(express.json());

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

// actually pretty proud of this, some of the most complex 
// object drilling & logic I've ever done

server.get("/test", (req, res) => {
  completed = req.query.completed;
  let completedTasks = [];
  let unCompletedTasks = [];
  if (completed == "true") {
    array.filter(user =>
      user.chores.filter(test => {
        if (test.completed == true) {
          completedTasks.push(test);
        }
      })
    );
    res.status(200).json(completedTasks);
  } else {
    array.filter(user =>
      user.chores.filter(test => {
        if (test.completed == false) {
          unCompletedTasks.push(test);
        }
      })
    );
    res.status(200).json(unCompletedTasks);
  }
});

server.listen(port, () => {
  console.log("Server running on port 8000");
});
