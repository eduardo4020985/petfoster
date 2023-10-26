import { Request, Response } from 'express';
import { registerOngUseCase, loginOngUseCase } from '../useCases/ONGUseCase';
import { attachCookiesToResponse, OngPayload } from '../services/jwtService';

import { PrismaClient} from '@prisma/client';
import { ConflictError } from '../errors';
const prisma = new PrismaClient();

export const registerController = async (req: Request, res: Response) => {
  const { name, location, website, email, password } = req.body;
  try {
    const ong = await registerOngUseCase(name, location, website, email, password);
    res.json(ong);
  } catch (error:any) {
    if (error.message.includes("Unique constraint failed on the fields: (`email`)")) {
      // Tratar o erro de violação de restrição única no campo 'email'.
      throw new ConflictError('Email already in use. Please choose a different email.');
    }
    //console.log(error.message.includes("Unique constraint failed on the fields: (`email`)"))
    res.status(500).json({ error: error.message });
  }
};

export const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const ong = await loginOngUseCase(email, password);

    const ongPayload: OngPayload={
        id: String(ong.id),
      }

    // Attach the cookie to the response
    attachCookiesToResponse(res, ongPayload);

    res.json(ong);
  } catch (error:any) {
    
    res.status(401).json({ error: error.message });
  }
  
};

export const logoutController= async (request: Request, response: Response): Promise<Response> => {
  try {
    const tokenCookie = request.cookies.cookie;
    console.log("oi",tokenCookie)
    /* const redisInstance= RedisSingleton.getInstance(redisConfig);
    await redisInstance.set(tokenCookie, tokenCookie, 'EX', 300); // Define the TTL for 5 minutes (300 seconds) */

   response.cookie("cookie", "", {
      httpOnly: true,
      expires: new Date(0),
      secure: process.env.NODE_ENV === "production",
  }); 
  console.log("logout")
    return response.json({ success: true});
  } catch (error) {
    console.log(error);
    return response.status(500).json({ error: (error as Error).message });
  }
}

