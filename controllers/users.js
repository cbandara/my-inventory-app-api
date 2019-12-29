const User = require('../models/users');

module.exports = {
  addUser: async (req, res) => {
    try {
      const { email, password } = req.body;
      const newUser = new User({ email, password });
      await newUser.save();
      return res.status(201).json({
        newUser
      })

    } catch (error) {
      return res.status(500).send({
        error: error.message
      })
    }
  }
}