import { RaumRepository } from "../../domain/model/RaumRepository";
import { Raum, RaumId } from "../../domain/model/Raum";
import { PersonenId } from "../../domain/model/Person";

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
        if (raum.hatPerson(personId)) {

            throw new Error(`Die Person mit der Id ${personId} ist bereits in dem Raum ${raum.name}.`)
        }

        return raum.fuegePersonHinzu(personId)
    }
}
