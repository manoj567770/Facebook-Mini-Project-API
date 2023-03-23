const { response } = require("express");
const Blog = require("../../Models/Blog");
const getBlogs = async (req, res) => {
  const { userId } = req;
  return await res.status(200).json({ message: `Getting userId ${userId}` });
};

const createBlogs = async (req, res) => {
  const { userId } = req;
  const { title, content } = req.body;

  if (!title) {
    return res.status(500).json({ message: "Title must be present" });
  }

  if (!content) {
    return res.status(500).json({ message: "content is missing" });
  }

  try {
    const result = await Blog.create({
      userId: userId,
      title: title,
      content: content,
      time: new Date().toISOString(),
      updatedAt: new Date().toDateString(),
    });

    return res.status(200).json({ blog: result });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "something went wrong! " });
  }
};

module.exports = { getBlogs, createBlogs };
