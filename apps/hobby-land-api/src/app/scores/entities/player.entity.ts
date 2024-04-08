import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Score } from './score.entity';

@Entity()
export class Player {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column()
  public name: string;

  @OneToMany(() => Score, (score) => score.winner)
  wins: Score[];
}
