import {Raum} from "./Raum";

export interface RaumRepository {
    finde(id: string): Raum;

    findeRaumMitNummer(nummer: string): Raum;

    findeRaumMitPerson(id: string): Raum;

    legeAn(raum: Raum): Raum;
}
