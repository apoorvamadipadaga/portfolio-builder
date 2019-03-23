import { Deserializable } from "./deserializable.model";

export class Achievement implements Deserializable  {
    id: number;
    achievement: string;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}