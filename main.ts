import express = require("express");
import fs = require("fs")

const app = express()

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
  
app.listen(parseInt(process.argv[2]))