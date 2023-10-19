import jwt from 'jsonwebtoken'

export const verifyToken = async (req, res, next) => {
     const token = req.cookies.accessToken;
     if (!token) return res.status(401).send("You are not authenticated!");

     jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
      if (err) return res.status(403).send("Your token is invalid!");
       req.payload = payload
       next()
     })
}
