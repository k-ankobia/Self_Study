const express = require('express');

const router = express.Router();

/**  @route GET api/auth
  @desc login as user
  @access Private
  * */
router.get('/', (req, res) => {
	res.send('get logged in user details');
});

/**  @route POST api/auth
  @desc Auth user and get token
  @access public
  * */
router.post('/', (req, res) => {
	res.send('log in user');
});

module.exports = router;