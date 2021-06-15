import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { getRepository } from "typeorm";
import User from "../models/User";
class AuthController {
  public async auth(req: Request, res: Response): Promise<Response> {

    const userRepository = getRepository(User);

    const user = await userRepository.findOne({
      where: { email: req.body.email },
    });

    if (!user) {
      return res
        .status(401)
        .json({ message: "Usuário Inexistente" });
    }
    
    const isValidPassword = await bcrypt.compare(req.body.password, user.password);

    if(!isValidPassword){
      return res
        .status(401)
        .json({ message: "Senha Incorreta" });
    }

    const token = jwt.sign({ id: user.id}, 'secret', { expiresIn: '5d'});

    delete user.password
    return res.status(202).json({ user, token});
  }
}

export default new AuthController();
