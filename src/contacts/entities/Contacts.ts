import {
  BaseEntity,
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn
} from "typeorm";
import { Emails } from "../../emails/entities/Emails";
import { Phones } from "../../phones/entities/Phones";
import { Websites } from "../../websites/entities/Websites";

@Index("identity", ["nom", "postnom", "prenom"], {})
@Entity("contacts")
export class Contacts extends BaseEntity {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("text", { name: "nom" })
  nom: string;

  @Column("text", { name: "prenom", nullable: true })
  prenom: string | null;

  @Column("text", { name: "postnom", nullable: true })
  postnom: string | null;

  @Column("text", { name: "company", nullable: true })
  company: string | null;

  @Column("text", { name: "title", nullable: true })
  title: string | null;

  @Column("text", { name: "img", nullable: true })
  img: string | null;

  @Column("text", { name: "bday", nullable: true })
  bday: string | null;

  @Column("text", { name: "genre", nullable: true })
  genre: string | null;

  @Column("text", { name: "details", nullable: true })
  details: string | null;

  @OneToMany(
    () => Emails,
    emails => emails.idContact
  )
  emails: Emails[];

  @OneToMany(
    () => Phones,
    phones => phones.idContact
  )
  phones: Phones[];

  @OneToMany(
    () => Websites,
    websites => websites.idContact
  )
  websites: Websites[];
}
