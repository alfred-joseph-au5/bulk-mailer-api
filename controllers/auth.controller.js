const jwt = require('jsonwebtoken');
const config = require('../utils/config');

const login = (req, res) => {
    const user = {
        id: 1,
        usn: 'aj',
        email: 'aj@aj.com'
    }
    jwt.sign(
        { user },
        config.JWT_SECRET,
        // { expiresIn:'30s' }, 
        { expiresIn: Math.floor(Date.now() / 1000) + (60 * 60)},
        (err, token) => {
            res.status(200).json({
                token
            });
        }
    )
}

const signup = (req, res) => {

}

const logout = (req, res) => {

}

module.exports = {
    login,
    signup,
    logout
}