const User = require('../models/user');
const Post = require('../models/post');

async function create(req, res) {
    const {title, description} = req.body
    console.log(title, description)
    const newPost = new Post({
        title,
        description
    })
    try {
      const savedPost = await newPost.save()
      console.log(savedPost)
      res.status(200).json(savedPost)
    }
    catch(err) {
        console.log(err)
    }
    }


async function index(req, res) {
    const posts = await Post.find({})
    res.status(200).json(posts)
        }


module.exports = {
    create,
    index,
}