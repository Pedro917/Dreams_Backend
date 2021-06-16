import { getCustomRepository } from "typeorm";
import UserRepository from "../repositories/userRepository";

export async function emailExists(email: string): Promise<Boolean> {
  const userRepository = getCustomRepository(UserRepository);
  const result = await userRepository.findByEmail(email);

  if (!result) {
    return false;
  }

  return true;
}
