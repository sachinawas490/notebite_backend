const jwt = require('jsonwebtoken');

const generatetoken = (user) => {
    const privateKey = process.env.PRIVATE_KEY;

    const payload = {
        id: user.id,
        email: user.email
    };

    const token = jwt.sign(payload, privateKey, { expiresIn: '5d' });
    return token;
};

module.exports = generatetoken;
