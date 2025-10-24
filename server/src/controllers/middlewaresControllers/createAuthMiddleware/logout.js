const mongoose = require('mongoose');

const jwt = require('jsonwebtoken');

const logout = async (req, res, { userModel }) => {
  const UserPassword = mongoose.model(userModel + 'Password');

  // const token = req.cookies[`token_${cloud._id}`];

  const token = req.cookies.token; // Extract the token

  const admin = jwt.verify(req.cookies.token, process.env.JWT_SECRET);

  if (token)
    await UserPassword.findOneAndUpdate(
      { user: admin.id },
      { $pull: { loggedSessions: token } },
      {
        new: true,
      }
    ).exec();
  else
    await UserPassword.findOneAndUpdate(
      { user: admin.id },
      { loggedSessions: [] },
      {
        new: true,
      }
    ).exec();

  res.cookie('token', 'loggedout', {
    expires: new Date(Date.now()),
    httpOnly: true,
    sameSite: 'none',
    secure: true,
    Credential: true,
  });

  return res.json({
    success: true,
    result: {},
    message: 'Successfully logout',
  });
};

module.exports = logout;
