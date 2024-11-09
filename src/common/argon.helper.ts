import { hash, verify } from 'argon2';

export const hashPassword = (plainPassword: string) => {
  return hash(plainPassword);
};

export const verifyPassword = (hash:string, plainPassword:string, ) => {
  return verify(hash, plainPassword);
}