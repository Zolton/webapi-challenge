const express = require("express");
const server = express();
const array = require("./database");
server.use(express.json());

server.get("/", (req, res) => {
  console.log(array);
  res.status(200).json(array);
});

server.post("/", (req, res) => {
  newPerson = req.body;
  array.push(newPerson)
  res.status(200).json(newPerson);
});

server.delete('/:id', (req, res) => {
    const id = req.params.id
    array.splice(id, 1)
    res.status(200).json(array)
})

server.put('/:id', (req, res) => {
    const replacement = req.body
    const id = req.params.id
    array.splice(id, 1, {replacement})
    res.status(200).json(array)
})

//months.splice(4, 1, 'May');
// replaces 1 element at index 4
////console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'May']

server.listen(8000, () => {
  console.log("Server running on port 8000");
});
