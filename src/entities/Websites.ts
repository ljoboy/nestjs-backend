import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from "typeorm";
import { Contacts } from "./Contacts";

@Entity("websites")
export class Websites {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("text", { name: "site" })
  site: string;

  @Column("text", { name: "type" })
  type: string;

  @ManyToOne(
    () => Contacts,
    contacts => contacts.websites,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "idContact", referencedColumnName: "id" }])
  idContact: Contacts;
}
