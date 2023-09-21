import { RaumRepository } from "../../domain/raum/RaumRepository";
import { RaumId } from "../../domain/raum/Raum";
import { PersonRepository } from "../../domain/person/PersonRepository";
import { RaumViewModel } from "../../infrastructure/raum/viewmodels/RaumViewModel";

export class FindeRaum {
    raumRepository: RaumRepository
    personRepository: PersonRepository

    constructor(raumRepository: RaumRepository, personRepository: PersonRepository) {
        this.raumRepository = raumRepository
        this.personRepository = personRepository
    }

    ausfuehren(raumId: RaumId): RaumViewModel {
        const raum = this.raumRepository.finde(raumId)

        const personenKurzNamen = raum.gibPersonenIds()
            .map(personenId => this.personRepository.finde(personenId))
            .map(person => person.gibKurzbeschreibung())

        return new RaumViewModel(raum, personenKurzNamen)
    }
}
