const User = require('../models/user');
const Post = require('../models/post');

async function create(req, res) {
    const {title, description, category, image} = req.body
    console.log(title, description, category, image)
    const newPost = new Post({
        title,
        description,
        category,
        image
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

async function detail(req, res) {
    const post = await Post.findById(req.params.id)
    res.status(200).json(post)
}


module.exports = {
    create,
    index,
    detail
}