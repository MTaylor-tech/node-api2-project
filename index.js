const express = require("express")
const cors = require("cors")
const postsRouter = require("./posts/posts-router")
const generalRouter = require("./general/general-router")


const server = express()
const port = 4001

server.use(express.json())
server.use(cors())
server.use(postsRouter)
server.use(generalRouter)


server.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`)
})
