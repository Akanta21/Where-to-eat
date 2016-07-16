const User = require('../models/user')

function signUp (req, res) {
  const user = new User(req.body)
  user.save((err, user) => {
    if (err) return res.status(401).json({error: 'Sign Up error'})
    res.status(200).json({message: 'Welcome ', user})
  })
}

function signIn (req, res) {
  const userParams = req.body

  User.findOne({email: userParams.email}, (err, user) => {
    if (err || !user) return res.status(401).json({error: 'Incorrect email or password'})
    user.authenticate(userParams.password, (err, isMatch) => {
      if (err) return res.status(401).json({err: 'Incorrect email or password'})
      res.status(200).json({message: 'Successfully signed in! Welcome: ', user})
    })
  })
}

module.exports = {
  signUp: signUp,
  signIn: signIn
}
