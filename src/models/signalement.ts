import { Author } from "./author";
import { Observation } from "./observation";

export interface Signalement {
    id: number;
    author: Author;
    productCode: string;
    observations: Observation[];
    description: string;
  }