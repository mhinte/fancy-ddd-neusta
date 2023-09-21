import {Raum, RaumId, RaumNummer} from "../../domain/raum/Raum";
import {RaumRepository} from "../../domain/raum/RaumRepository";
import {PersonenId} from "../../domain/person/Person";

const raeume: Raum[] = []

export class RaumRepositoryImpl implements RaumRepository {
    finde(raumId: RaumId): Raum {
        return raeume.find(r => r.id.equals(raumId.value))
    }

    findeRaumMitNummer(raumNummer: RaumNummer): Raum {
        return raeume.find((raum: Raum) => raum.nummer.equals(raumNummer.value))
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
