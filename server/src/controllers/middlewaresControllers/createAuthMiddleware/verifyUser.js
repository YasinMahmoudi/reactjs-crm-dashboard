const jwt = require('jsonwebtoken');

const mongoose = require('mongoose');

const verifyUser = async (req, res, { userModel }) => {
  // Get the user from the jwt token and add id to req object
  const token = req.cookies.token;
  if (!token) {
    return res.send({
      error: 'Please authenticate using a valid token',
      token: false,
    });
  }

  try {
    const User = mongoose.model(userModel);

    const verified = jwt.verify(req.cookies.token, process.env.JWT_SECRET);

    const currentUser = await User.findOne({ _id: verified.id, removed: false });

    if (!currentUser) {
      return res.json({ token: false });
    }

    req.user = currentUser;

    return res.status(200).json({ token: true, id: req.user._id });
  } catch (error) {
    return res.send({
      error: 'Please authenticate using a valid token',
      token: false,
    });
  }
};

module.exports = verifyUser;
