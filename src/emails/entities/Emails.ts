import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from "typeorm";
import { Contacts } from "../../contacts/entities/Contacts";

@Entity("emails")
export class Emails extends BaseEntity {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("text", { name: "mail" })
  mail: string;

  @Column("text", { name: "type" })
  type: string;

  @ManyToOne(
    () => Contacts,
    contacts => contacts.emails,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "idContact", referencedColumnName: "id" }])
  idContact: Contacts;
}
