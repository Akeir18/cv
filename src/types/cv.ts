import type { Education } from "./education";
import type { Experience } from "./experience";
import type { Skills } from "./skills";

export interface CVData {
    completeName: string;
    title       : string;
    email       : string;
    phone       : string;
    hardSkills  : Skills[];
    softSkills  : Skills[];
    experience  : Experience[];
    education   : Education[];
}