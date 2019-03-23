import { Deserializable } from "./deserializable.model";

export class Project implements Deserializable {
    id: number;
    title: string;
    description: string;
    startDate: string;
    endDate: string;
    
    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}