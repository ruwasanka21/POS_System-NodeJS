const jwt = require('jsonwebtoken');
const AuthMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({'message':'Unauthorized. No token provided.'});
    }
    const token = authHeader.split(' ')[1];
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'sjfsdfasdjfksfugadsfajfug');
        req.user = decoded;
        next();
    }catch (e) {
        res.status(401).json({'message':'Token invalid.'});
    }
}

module.exports = AuthMiddleware;