const express = require("express")
const server = express()
//const array = require("./database")
server.use(express.json)

server.get("/", (req, res)=>{
    res.status(200).json({hello: "it works"})
})

// server.get("/chores", (req, res)=>{
//     array.chores.map(chore=>userChore = chore)
//     res.status(200).json(userChore)
// })

server.listen(8000, ()=>{console.log("Server running on port 8000")})