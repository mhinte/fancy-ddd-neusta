import { Raum } from "../domain/Raum";
import { RaumRepository } from "../domain/RaumRepository";

const raeume: Raum[] = []

export class RaumRepositoryImpl implements RaumRepository {
    finde(id: string): Raum {
        return raeume.find(r => r.id === id)
    }
    findeRaumNummer(nummer: string): Raum {
        return raeume.find(r => r.nummer === nummer)
    }
    findeRaumMitPerson(id: string): Raum {
        throw new Error("Method not implemented.");
    }
    legeAn(raum: Raum): Raum {
        raeume.push(raum)
        return raum
    }
}