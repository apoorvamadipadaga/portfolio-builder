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
    theme: number;

    deserialize(input: any) {
        Object.assign(this, input);

        this.skills = [];
        if(input.skills != null) {
            input.skills.forEach(element => {
                this.skills.push(new Skill().deserialize(element));
            });
        }

        this.projects = [];
        if(input.projects != null) {
            input.projects.forEach(element => {
                this.projects.push(new Project().deserialize(element));
            });
        }

        this.achievements = [];
        if(input.achievements != null) {
            input.achievements.forEach(element => {
                this.achievements.push(new Achievement().deserialize(element));
            });
        }
        return this;
    }
}