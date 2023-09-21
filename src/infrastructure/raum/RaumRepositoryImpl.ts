import {Raum, RaumId, RaumNummer} from "../../domain/raum/Raum";
import {RaumRepository} from "../../domain/raum/RaumRepository";
import {PersonenId} from "../../domain/person/Person";

const raeume: Raum[] = []

export class RaumRepositoryImpl implements RaumRepository {
    finde(id: RaumId): Raum {
        const raeumeList = raeume.find(r => r.id === id)
        return raeumeList;
    }

    findeRaumMitNummer(nummer: RaumNummer): Raum {
        return raeume.find(r => r.nummer === nummer)
    }

    findeRaumMitPerson(id: PersonenId): Raum {
        return raeume.find((raum: Raum) => {
            raum.hatPerson(id)
        })
    }

    legeAn(raum: Raum): Raum {
        raeume.push(raum)
        return raum
    }
}
