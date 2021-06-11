import { Request, Response } from "express";
import { getRepository } from "typeorm";

import User from "../models/User";

class UserController {
  public async index(req: Request, res: Response): Promise<Response> {
    const userRepository = getRepository(User);
    const users = await userRepository.find();

    return res.status(200).json(users);
  }

  public async store(req: Request, res: Response): Promise<Response> {
    const data = {
      username: "Pedro Barbosa Muniz",
      email: "pedrobarbosa.first@gmail.com",
      password: "admin123456",
    };
    const userRepository = getRepository(User);
    const user = userRepository.create(data);
    await userRepository.save(user);
    
    return res.status(201).json(user);
  }
}

export default new UserController();
