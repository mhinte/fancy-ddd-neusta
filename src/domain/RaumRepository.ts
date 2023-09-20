import {Raum} from "./Raum";

export interface RaumRepository{

    finde(id: string): Raum;
    findeRaumNummer(nummer: string): Raum;
    findeRaumPerson(id: string): Raum;
    legeAn(Raum): Raum;
}
