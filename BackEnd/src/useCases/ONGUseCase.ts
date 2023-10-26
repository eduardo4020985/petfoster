import authRepository from '../repositories/ONGRepository';

export const registerOngUseCase = async (name: string, location: string, website: string | null, email: string, password: string) => {
  if (!name || !location || !email || !password) {
    throw new Error('Registration data is incomplete');
  }

  const ong = await authRepository.registerOng(name, location, website, email, password);
  return ong;
};

export const loginOngUseCase = async (email: string, password: string) => {
  if (!email || !password) {
    throw new Error('Login credentials are incomplete');
  }

  const ong = await authRepository.loginOng(email, password);
  return ong;
};
