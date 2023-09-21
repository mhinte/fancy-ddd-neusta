import {Raum} from "../domain/model/Raum";
import {RaumRepository} from "../domain/model/RaumRepository";

const raeume: Raum[] = []

export class RaumRepositoryImpl implements RaumRepository {
    finde(id: string): Raum {
        return raeume.find(r => r.id === id)
    }

    findeRaumMitNummer(nummer: string): Raum {
        return raeume.find(r => r.nummer === nummer)
    }

    findeRaumMitPerson(id: string): Raum {
        return raeume.find((raum: Raum) => {
            raum.hatPerson(id)
        })
    }

    legeAn(raum: Raum): Raum {
        raeume.push(raum)
        return raum
    }
}
