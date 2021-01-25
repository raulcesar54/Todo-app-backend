import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('task')
export default class User {
    @PrimaryGeneratedColumn('increment')
    id: string;

    @Column('varchar')
    description: string;

    @Column({type:'integer', default:0})
    status: number;

  
}