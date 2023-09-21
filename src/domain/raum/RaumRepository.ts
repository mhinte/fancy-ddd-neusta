import { PersonenId } from "../person/Person";
import { Raum, RaumId, RaumNummer } from "./Raum";

export interface RaumRepository {
    finde(id: RaumId): Raum;

    findeRaumMitNummer(nummer: RaumNummer): Raum;

    findeRaumMitPerson(id: PersonenId): Raum;

    legeAn(raum: Raum): Raum;
}
