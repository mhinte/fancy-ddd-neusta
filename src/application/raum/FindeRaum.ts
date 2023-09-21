import { RaumRepository } from "../../domain/model/RaumRepository";
import { RaumId } from "../../domain/model/Raum";
import { PersonRepository } from "../../domain/model/PersonRepository";
import { RaumViewModel } from "../../infrastructure/viewmodels/RaumViewModel";

export class FindeRaum {
    raumRepository: RaumRepository
    personRepository: PersonRepository

    constructor(raumRepository: RaumRepository, personRepository: PersonRepository) {
        this.raumRepository = raumRepository
        this.personRepository = personRepository
    }

    ausfuehren(id: RaumId): RaumViewModel {
        const raum = this.raumRepository.finde(id)

        const personenKurzNamen = raum.gibPersonenIds()
            .map(personenId => this.personRepository.finde(personenId))
            .map(person => person.gibKurzbeschreibung())

        return new RaumViewModel(raum, personenKurzNamen)

    }
}
