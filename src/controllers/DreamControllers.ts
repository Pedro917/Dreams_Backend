import { Request, Response } from "express";
import { getRepository } from "typeorm";

import Dream from "../models/Dream";
import User from "../models/User";

class DreamControllers {
  public async index(req: Request, res: Response): Promise<Response> {
    const dreamRepository = getRepository(Dream);
    const dreams = await dreamRepository.find();

    return res.status(200).json(dreams);
  }

  public async store(req: Request, res: Response): Promise<Response> {
    const userRepository = getRepository(User);
    const dreamRepository = getRepository(Dream);

    const { title, description, price, url, userId } = req.body;

    try {
      //
      await userRepository.findOneOrFail(userId);
      const dream = dreamRepository.create({ title, description, price, url, userId });
      await dreamRepository.save(dream);
      return res.status(201).json(dream);
      //
    } catch (error) {
      //
      return res.status(500).json(error);
      //
    }
  }
}

export default new DreamControllers();
