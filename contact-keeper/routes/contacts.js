const express = require('express');

const router = express.Router();

/**  @route GET api/contacts
  @desc get all user contacts
  @access private
  * */
router.get('/', (req, res) => {
	res.send('get all contacts');
});

/**  @route POST api/contacts
  @desc add a user contacts
  @access private
  * */
router.post('/', (req, res) => {
	res.send('add contact');
});

/**  @route PUT api/contacts/:id
  @desc update a user contacts
  @access private
  * */
router.put('/"id', (req, res) => {
	res.send('update contact');
});

/**  @route POST api/contacts/:id
  @desc delete a contact user
  @access public
  * */
router.delete('/:id', (req, res) => {
	res.send('Delete contact');
});

module.exports = router;