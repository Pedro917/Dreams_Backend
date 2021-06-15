import { Request, Response } from "express";
import { getRepository } from "typeorm";
import User from "../models/User";
class UserController {
  public async index(req: Request, res: Response): Promise<Response> {
    const userRepository = getRepository(User);
    const users = await userRepository.find();

    users.map((user) => delete user.password);

    return res.status(200).json(users);
  }

  public async store(req: Request, res: Response): Promise<Response> {
    const data = {
      username: req.body.username,
      age: req.body.age,
      email: req.body.email,
      password: req.body.password,
    };

    const userRepository = getRepository(User);

    const userExist = await userRepository.findOne({
      where: { email: req.body.email },
    });

    if (userExist) {
      return res
        .status(409)
        .json({ message: "Email já cadastrado no sistema" });
    }

    const user = userRepository.create(data);
    await userRepository.save(user);

    return res.status(201).json(user);
  }
}

export default new UserController();
