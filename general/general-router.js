const express = require("express")
const router = express.Router()

router.get("/api", (req, res) => {
	res.json({
		message: "Welcome to our API",
	})
})

module.exports = router
