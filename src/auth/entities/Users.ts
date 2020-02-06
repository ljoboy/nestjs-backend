import {BaseEntity, Column, Entity, PrimaryGeneratedColumn, Unique} from "typeorm";
import * as bcrypt from "bcrypt";

@Entity("users")
@Unique(['username'])
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("text", { name: "username" })
  username: string;

  @Column("text", { name: "password" })
  password: string;

  @Column("text", { name: "salt" })
  salt: string;

  @Column("text", { name: "img", nullable: true })
  img: string | null;

  async validatePassword(password: string): Promise<boolean> {
    const hash = await bcrypt.hash(password, this.salt);
    return hash === this.password;
  }
}
