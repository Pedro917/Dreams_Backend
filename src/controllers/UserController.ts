import { Request, Response } from "express";
import { getCustomRepository, getRepository } from "typeorm";
import UserRepository from "../repositories/userRepository";
import { emailExists } from "../helpers/helpers";
class UserController {
  public async index(req: Request, res: Response): Promise<Response> {
    const userRepository = getCustomRepository(UserRepository);
    const users = await userRepository.find();

    users.map((user) => delete user.password);

    return res.status(200).json({ userId: req.userId, users });
  }

  public async store(req: Request, res: Response): Promise<Response> {

    const {
      username,
      age,
      email,
      password,
    } = req.body;

    if(await emailExists(email)){
      return res
        .status(409)
        .json({ message: "Email já cadastrado no sistema" });
    }

    const userRepository = getCustomRepository(UserRepository);
    const user = userRepository.create({username,age,email,password});
    await userRepository.save(user);

    return res.status(201).json(user);
  }

  public async edit(req: Request, res: Response): Promise<Response> {

    const {
      username,
      age,
      email,
    } = req.body;

    if(await emailExists(email)){
      return res
        .status(409)
        .json({ message: "Email já cadastrado no sistema" });
    }
    
    const userRepository = getCustomRepository(UserRepository);
    const { userId } = req.params;
    const user = await userRepository.findOne(userId);

    if (!user) {
      return res.status(404).json({ message: "Usuário Inexistente" });
    }

    userRepository.merge(user, {username,age,email});
    const results = await userRepository.save(user);
    delete results.password;
    return res.status(200).json(results);
  }

  public async delete(req: Request, res: Response): Promise<Response> {

    const userRepository = getCustomRepository(UserRepository);
    const { userId } = req.params;
    const user = await userRepository.findOne(userId);

    if (!user) {
      return res.status(404).json({ message: "Usuário Inexistente" });
    }

    try {
      // 
      await userRepository.delete(userId);
      return res.status(200).json({message: "Usuário deletado do banco de dados"});
      // 
    } catch (error) {
      return res.status(500).json({error});
    } 

    
  }
}

export default new UserController();
