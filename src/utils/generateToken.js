import jwt from 'jsonwebtoken';
import { configDotenv } from 'dotenv';
const config = configDotenv().parsed;


const generateToken = (id) => {
    return jwt.sign({ id }, config.JWT_SECRET, {
        expiresIn: '1d'
    });
};


export default generateToken;