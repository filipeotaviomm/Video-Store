import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("movies")
export default class Movie {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 50, unique: true })
  name: string;

  @Column({ type: "text", nullable: true })
  description: string;

  @Column({ type: "integer" })
  duration: number;

  @Column({ type: "integer" })
  price: number;
}
