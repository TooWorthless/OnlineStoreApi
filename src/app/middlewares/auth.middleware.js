import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
import { configDotenv } from 'dotenv';
const config = configDotenv().parsed;


const jwtAuthMiddleware = async (req, res, next) => {
    const token = req.headers['Authorization'] || req.headers['authorization'];
    
    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }
    if(token.indexOf('Bearer') !== 0) {
        return res.status(401).json({ message: 'Token format invalid' });
    }

    const tokenString = token.split(' ')[1];
    try {
        const decoded = jwt.verify(tokenString, config.JWT_SECRET);
        req.user = await User.findById(decoded.id).select('-password');
        next();
    } catch (err) {
        res.status(401).json({ message: 'Token is not valid' });
    }
};

const rbacAuthMiddleware = (role) => {
    return (req, res, next) => {
        if (req.user && req.user.role === role) {
            return next();
        }
        return res.status(403).json({ message: 'Access denied. Insufficient role.' });
    };
};

export {
    jwtAuthMiddleware,
    rbacAuthMiddleware
};
