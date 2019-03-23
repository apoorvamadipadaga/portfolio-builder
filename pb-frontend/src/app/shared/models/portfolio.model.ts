import { Skill } from './skill.model';
import { Project } from './project.model';
import { Achievement } from './achievement.model';
import { Deserializable } from "./deserializable.model";

export class Portfolio implements Deserializable {
    id: number;
    pin: number;
    uname: string;
    name: string;
    header: string;
    description: string;
    skills: Skill[];
    projects: Project[];
    achievements: Achievement[];

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}