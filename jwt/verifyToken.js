const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    console.log("called")
    const privateKey = process.env.PRIVATE_KEY;
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        console.log('Authorization header is missing');
        return res.status(401).json({ message: 'Authorization header is missing' });
    }
   
    const token = authHeader.split(' ')[1];    // Bearer <token>
   console.log(authHeader,"   --  ",token)
    if (!token) {
        console.log("Token is not presented");
        return res.status(401).json({ message: 'Token is missing' });
    }

    try {
        const decoded = jwt.verify(token, privateKey);
        console.log("decoded token ",decoded)
        req.user = decoded; // Attach decoded token 
        next();
    } catch (error) {
        console.log("error verification")
        res.status(401).json({ message: "Unauthorized token" });
    }
}

module.exports = verifyToken;
