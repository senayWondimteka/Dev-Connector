const express = require('express')
const router = express.Router();
const { check, validationResult } = require('express-validator/check')
// @route POS api/users
// @desc  Register user
// @access Public
router.post('/', [
  check('name', "Name is required")
  .not()
  .isEmpty(),
  check('email', "Place include a valid email").isEmail(),
  check(
    'password', 
    "please enter a password with 6 or more characters"
    ).isLength({ min:6 })
], 
(req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  res.send('User route')
});

module.exports = router;