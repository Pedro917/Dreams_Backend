import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

import User from "../models/User"

@Entity("dreams")
export default class Profile {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  url: string;

  @ManyToOne(() => User, user => user.dreams)
    user: User;
}
