const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/profile')


/*---------- Protected Routes ----------*/
// Process the token for only the routes below
// router.use(require('../../config/auth'));

router.get('/index', postsCtrl.index);
router.post('/new',  postsCtrl.create);
 
/*----- Helper Functions -----*/
function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;