import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate
} from "typeorm";
import bcrypt from "bcrypt";
import Dream from "./Dream";

@Entity("users")
export default class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  age: number;

  @Column()
  password: string;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
  updated_at: Date;

  @OneToMany(() => Dream, dream => dream.user)
    dreams: Dream[];

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword(){
    this.password = bcrypt.hashSync(this.password, 10);
  }
}
