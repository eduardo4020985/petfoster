import { Request, Response, NextFunction } from "express";
import { UnauthenticatedError, UnauthorizedError } from "../errors";
import {
    extractTokenPayload,
    OngPayload,
} from "../services/jwtService";

import { RedisSingleton } from "../config/redis.config"; 
require('dotenv').config();
const redisHost = process.env.REDIS_HOST!;
const redisPort = parseInt(process.env.REDIS_PORT!, 10);
const redisPassword = process.env.REDIS_PASSWORD!; 

// Load environment variables from .env file
require('dotenv').config();

const redisConfig = {
  host: redisHost,
  port: Number(redisPort),
  password: redisPassword,
};

const authenticateUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    let token;

    const authHeader = req.cookies.cookie;

    if (!authHeader) {
        throw new UnauthenticatedError("Authentication invalid");
    }

    if (authHeader /*&& authHeader.startsWith("Bearer")*/) {
        token = authHeader
    } /* else if (req.cookies.token) {
        token = req.cookies.token;
    } */

     if (!token) {
        throw new UnauthenticatedError("Authentication invalid");
    }

    const redisInstance= RedisSingleton.getInstance(redisConfig);
    
    if(await redisInstance.exists(token)){
        throw new UnauthenticatedError("Authentication invalid");
    }

    const payload = extractTokenPayload(token);

    req.ong = {
        id: payload.id,
    };

    //console.log(payload)

    next();
};




export { authenticateUser };
