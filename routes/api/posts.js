const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/posts')


/*---------- Protected Routes ----------*/
// Process the token for only the routes below
router.use(require('../../config/auth'));

router.get('/', postsCtrl.index);
router.post('/', checkAuth, postsCtrl.create);
router.get('/:id', postsCtrl.detail);
 
/*----- Helper Functions -----*/
function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;