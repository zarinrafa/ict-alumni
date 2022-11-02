import jwt from 'jsonwebtoken'

export const protectedAccess = async (req, res, next) => {
  // Get token from header
  const token = req.header('x-auth-token')
  // Check if token is not there
  if (!token) {
    return res.status(401).json({ msg: 'token not found, unauthorized request' })
  }
  //verify token with -> jwt.verify(token, secret, callback(err, decoded))
  try {
    jwt.verify(token, process.env.JWT, (error, decoded) => {
      if (error) {
        return res.status(401).json({ msg: 'Token is not valid' });
      } else {
        req._id = decoded._id
        next()
      }
    });
  } catch (err) {
    console.error('something wrong with auth middleware');
    res.status(500).json({ msg: 'Server error' });
  }
}