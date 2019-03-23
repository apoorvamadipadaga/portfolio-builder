import { Deserializable } from "./deserializable.model";

export class Skill implements Deserializable {
    id: number;
    skillname: string;
    
    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}