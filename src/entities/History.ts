import {Column, Entity, JoinColumn, ManyToOne} from 'typeorm';
import {Common} from './interfaces/Common';
import {Model} from './Model';
import {User} from './User';
import {
    HistoryStatus,
    ModelInputInfo,
    ModelInputType,
    ModelOutputInfo,
    ModelOutputType
} from '../types/chameleon-platform.common';

@Entity()
export class History extends Common {
    @Column({type: 'enum', enum: HistoryStatus})
        status: string;
    @Column()
        containerId: string;
    @Column({nullable: true})
        inputPath: string;
    @Column({nullable: true, type: 'json'})
        inputInfo: ModelInputInfo;
    @Column({nullable: true, enum: ModelInputType})
        inputType: string;

    @Column({nullable: true})
        outputPath: string;
    @Column({nullable: true, type: 'json'})
        outputInfo: ModelOutputInfo;
    @Column({nullable: true, enum: ModelOutputType})
        outputType: string;
    @Column({nullable: true, type: 'text'})
        description: string;
    @ManyToOne(
        () => User,
        (user) => user.id
    )
    @JoinColumn()
        executor: User;

    @ManyToOne(
        () => Model,
        (model) => model.id, {nullable: true}
    )
    @JoinColumn()
        model: Model;

    @Column({nullable: true})
        startedTime: Date;
    @Column({nullable: true})
        endedTime: Date;

    @Column({nullable: true, type: 'json'})
        parameters: any;
    @Column({nullable: true, type: 'text'})
        terminal: string;

}

