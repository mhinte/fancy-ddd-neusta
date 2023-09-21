import { RaumRepository } from "../../domain/raum/RaumRepository";
import { Raum, RaumId } from "../../domain/raum/Raum";
import { Person, PersonenId } from "../../domain/person/Person";
import { PersonRepository } from "../../domain/person/PersonRepository";

export class PersonZuRaumHinzufuegen {

    raumRepository: RaumRepository
    personRepository: PersonRepository

    constructor(raumRepository: RaumRepository, personRepository: PersonRepository) {
        this.raumRepository = raumRepository
        this.personRepository = personRepository
    }

    ausfuehren(raumId: RaumId, personId: PersonenId): boolean {
        const raum: Raum = this.raumRepository.finde(raumId)
        if (!raum) {
            throw new Error(`Der Raum existiert nicht.`)
        }

        const person: Person = this.personRepository.finde(personId)
        if (!person) {
            throw new Error(`Die Person existiert nicht.`)
        }

        if (raum.hatPerson(personId)) {
            throw new Error(`Die Person mit der Id ${personId} ist bereits in dem Raum ${raum.name}.`)
        }

        return raum.fuegePersonHinzu(personId)
    }
}
