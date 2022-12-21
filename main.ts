import express = require("express");
import cors = require("cors")
import fs = require("fs")

const app = express()
app.use(cors())

function readModJson(name: string): object {
    return JSON.parse(fs.readFileSync("mods/" + name + ".json").toString())
}

app.get('/heartbeat', (req, res) => {
    res.send('ok')
})

app.get("/", (req, res) => {
    res.json(readModJson("index"))
})
app.get("/mod/:fileid", (req, res) => {
    res.send(readModJson(req.params["fileid"]))
})

console.log("loaded")
app.listen(process.env.PORT || 3001)