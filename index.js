const express = require("express");
const server = express();
const array = require("./database");
server.use(express.json());
require("dotenv").config()
const port = process.env.PORT

// function queryReader (req, res, next) {
//     if (req.query.completed ===  true) {
//         res.query.id.map(chores => chore = chores)
//         res.status(200).json(chores)
//     }
// }

server.get("/", (req, res) => {
  res.status(200).json(array);
});

server.post("/", (req, res) => {
  newPerson = req.body;
  newPerson.id = array.length + 1
  array.push(newPerson)
  res.status(200).json(newPerson);
});

server.delete('/:id', (req, res) => {
    const id = req.params.id
    .then(
    array.map(idFinder=>{
        // Map over array, decide if the entered ID is equal or not
        if (idFinder.id != id) {
            // let foundID = id
            // return foundID
            res.status(404).json({Sorry: "That ID does not exist"})
        }
        else {
            let foundID = id
            array.splice(foundID, 1)
            res.status(200).json(foundID)
        }
    }))

})

// server.get("/chores/:id", queryReader, (req, res)=>{
//     // array.map(idFinder=>{
//     //     if (idFinder.id != id) {
//     //         console.log(id)
//     //         res.status(404).json({Sorry: "That ID does not exist"})
//     //     }
//     //     else {
//     //         let choresReturned = []
//     //         res.status(200).json(choresReturned)
//     //     }
//     // })
//     res.status(200).json({A: "ok"})
// })

// server.get("/chores/:id", (req, res)=>{
//     //const replacement = req.body
//     const id = req.params.id
//     res.status(200).json(array[id].chores)
// })

// 1st parameter of splice: where to cut
// 2nd: how much to cut
// 3rd: what to put in the hole

server.put('/:id', (req, res) => {
    const replacement = req.body
    const id = req.params.id
    array.splice(id, 1, {replacement})
    res.status(200).json(array)
})

// server.get("/:id", (req, res)=>{
//     const id = req.params.id
//     chores = array[id].chores
// })


server.listen(port, () => {
  console.log("Server running on port 8000");
});
