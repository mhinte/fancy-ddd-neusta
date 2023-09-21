import { RaumRepository } from "../../domain/raum/RaumRepository";
import { Raum, RaumId } from "../../domain/raum/Raum";
import { PersonenId } from "../../domain/person/Person";

export class PersonZuRaumHinzufuegen {

    raumRepository: RaumRepository

    constructor(raumRepository: RaumRepository) {
        this.raumRepository = raumRepository
    }

    ausfuehren(raumId: RaumId, personId: PersonenId): boolean {
        const raum: Raum = this.raumRepository.finde(raumId)
        if (!raum) {
            throw new Error(`Der Raum existiert nicht.`)
        }

        // TODO chekc if person exists

        if (raum.hatPerson(personId)) {
            throw new Error(`Die Person mit der Id ${personId} ist bereits in dem Raum ${raum.name}.`)
        }

        return raum.fuegePersonHinzu(personId)
    }
}
