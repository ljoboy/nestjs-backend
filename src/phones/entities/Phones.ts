import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from "typeorm";
import { Contacts } from "../../contacts/entities/Contacts";

@Entity("phones")
export class Phones extends BaseEntity {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("text", { name: "number" })
  number: string;

  @Column("text", { name: "type" })
  type: string;

  @ManyToOne(
    () => Contacts,
    contacts => contacts.phones,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "idContact", referencedColumnName: "id" }])
  idContact: Contacts;
}
