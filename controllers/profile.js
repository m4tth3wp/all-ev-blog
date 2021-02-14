const User = require('../models/user');

function create(req, res) {
    User.findById(req.user._id, function(err, user) {
        const post = req.body
        user.posts.push(post)
        user.save()
        res.send('<h1>create Function</h1>')
    }
    )}


function index(req, res) {
    console.log('hitting the index function')
    res.send('<h1>index Function</h1>')
        }


// function index(req, res) {
//     User.findById(req.user._id, function(err, user) {
//         let postList = user.posts
//         res.send('<h1>index Function</h1>')
//     })
// }


function deletePost(req, res) {
    User.findOne({'post._id': req.params.id}, function(err, user) {
      // Find the comment subdoc using the id method on Mongoose arrays
      const commentSubdoc = user.posts.id(req.params.id);
      commentSubdoc.remove();
      user.save()
    });
}

module.exports = {
    create,
    index,
    deletePost
}