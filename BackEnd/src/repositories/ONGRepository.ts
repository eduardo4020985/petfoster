import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const authRepository = {
  async registerOng(name: string, location: string, website: string | null, email: string, password: string) {
    try {
      const ong = await prisma.ong.create({
        data: {
          name,
          location,
          website,
          email,
          password,
        },
      });
      return ong;
    } catch (error:any) {
      throw new Error('Failed to register ONG: ' + error.message);
    }
  },

  async loginOng(email: string, password: string) {
    try {
      const ong = await prisma.ong.findUnique({
        where: {
          email,
        },
      });

      if (!ong || ong.password !== password) {
        throw new Error('Invalid credentials');
      }

      return ong;
    } catch (error: any) {
      throw new Error('Login failed: ' + error.message);
    }
  },
};

export default authRepository;
