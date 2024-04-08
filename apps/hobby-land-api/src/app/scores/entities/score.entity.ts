import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { Player } from './player.entity';

@Entity()
export class Score {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  public date: Date;

  @Column()
  public gameName: string;

  @Column('text', { array: true })
  public players: Player[];

  @ManyToOne(() => Player, (player) => player.wins)
  public winner: Player;
}
