const express = require("express");
const { auth } = require("../middlewares/Auth");
const { getBlogs, createBlogs } = require("./controller/blogsController");
const router = express.Router();

router.get("/", auth, getBlogs);
router.post("/", auth, createBlogs);

module.exports = router;
