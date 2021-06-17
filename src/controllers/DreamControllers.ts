import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";

import DreamRepository from "../repositories/dreamRepository";
import UserRepository from "../repositories/userRepository";

import Dream from "../models/Dream";
import User from "../models/User";

class DreamControllers {
  public async index(req: Request, res: Response): Promise<Response> {
    const dreamRepository = getCustomRepository(DreamRepository);
    const dreams = await dreamRepository.find();

    return res.status(200).json(dreams);
  }

  public async store(req: Request, res: Response): Promise<Response> {
    const { title, description, price, url, userId } = req.body;

    const userRepository = getCustomRepository(UserRepository);
    const dreamRepository = getCustomRepository(DreamRepository);

    const user = await userRepository.findOne(userId);

    if(!user){
      return res.status(404).json({ message: "Usuário Inexistente"});
    }

    const dream = dreamRepository.create({
      title,
      description,
      price,
      url,
      userId,
    });

    await dreamRepository.save(dream);
    return res.status(201).json(dream);
  }

  public async edit(req: Request, res: Response): Promise<Response> {
    const { title, description, price, url } = req.body;

    const dreamRepository = getCustomRepository(DreamRepository);
    const { dreamId } = req.params;
    const dream = await dreamRepository.findOne(dreamId);

    if(!dream){
      return res.status(404).json({ message: "Sonho Inexistente" });
    }

    dreamRepository.merge(dream, {title, description, price, url});
    const results = await dreamRepository.save(dream);
    
    return res.status(200).json(results);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const dreamRepository = getCustomRepository(DreamRepository);
    const { dreamId } = req.params;
    const user = await dreamRepository.findOne(dreamId);

    if (!user) {
      return res.status(404).json({ message: "Sonho Inexistente" });
    }

    try {
      // 
      await dreamRepository.delete(dreamId);
      return res.status(200).json({message: "Sonho deletado do banco de dados"});
      // 
    } catch (error) {
      return res.status(500).json({error});
    } 
  }
}

export default new DreamControllers();
