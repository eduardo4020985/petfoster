import jwt from "jsonwebtoken";
import { Response } from "express";
import { UnauthenticatedError } from "../errors";

require('dotenv').config();

const JWTsecret = process.env.JWT_SECRET
const JWTlifetime= process.env.JWT_LIFETIME

interface OngPayload {
    id: string;
}


const createJWT = (payload: OngPayload): string => {
    const token = jwt.sign(payload, JWTsecret!, {
        expiresIn: JWTlifetime || "5m",
    });
    return token;
};

const isTokenValid = (token: string): boolean => {
    try {
        jwt.verify(token, JWTsecret!);
        return true;
    } catch (error) {
        return false;
    }
};

const attachCookiesToResponse = (res: Response, user: OngPayload): void => {
    const token = createJWT(user);

    const time = 5 * 60 * 1000;

    res.cookie("cookie", token, {
        httpOnly: true,
        expires: new Date(Date.now() + time),
        secure: process.env.NODE_ENV === "production",
    });
};

const extractTokenPayload = (token: string): OngPayload => {
    try {
        console.log(JWTsecret!)
        const decoded = jwt.verify(token, JWTsecret!) as OngPayload;
        console.log(decoded)
        return decoded;
    } catch (error) {
        throw new UnauthenticatedError("Invalid token");
    }
};

function clearToken() {
    // Limpe o token armazenado no Local Storage
    //sessionStorage.removeItem('auth-user');
  
    // Limpe o cookie que armazena o token
    document.cookie = 'cookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  }


export {
    createJWT,
    isTokenValid,
    attachCookiesToResponse,
    extractTokenPayload,
    clearToken,
    OngPayload
};
