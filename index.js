require('dotenv').config();
const express = require("express")
const cors = require("cors")
const postsRouter = require("./posts/posts-router")
const generalRouter = require("./general/general-router")


const port = process.env.PORT || 4001;

const server = express()

server.use(express.json())
server.use(cors())
server.use(postsRouter)
server.use(generalRouter)


server.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`)
})
