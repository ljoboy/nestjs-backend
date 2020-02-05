import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity("users")
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("text", { name: "username" })
  username: string;

  @Column("text", { name: "password" })
  password: string;

  @Column("text", { name: "img", nullable: true })
  img: string | null;
}
