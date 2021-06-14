import { Request, Response } from "express";
import { getRepository } from "typeorm";
import User from "../models/User";
import bcrypt from "bcrypt";

class UserController {
  public async index(req: Request, res: Response): Promise<Response> {
    const userRepository = getRepository(User);
    const users = await userRepository.find();

    return res.status(200).json(users);
  }

  public async store(req: Request, res: Response): Promise<Response> {

    let password = req.body.password

    password = await bcrypt.hash(req.body.password, 10);

    const data = {
      username: req.body.username,
      age: req.body.age,
      email: req.body.email,
      password: password,
    };
    
    const userRepository = getRepository(User);
    const user = userRepository.create(data);
    await userRepository.save(user);
    
    return res.status(201).json(user);
  }
}

export default new UserController();
