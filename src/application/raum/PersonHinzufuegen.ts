import { PersonRepository } from "../../domain/model/PersonRepository";
import { Person, PersonenBenutzername } from "../../domain/model/Person";

export class PersonHinzufuegen {

    personRepository: PersonRepository

    constructor(personRepository: PersonRepository) {
        this.personRepository = personRepository
    }

    ausfuehren(person: Person): Person {
        const istBenutzerNameEindeutig: boolean = this.istBenutzerNameEindeutig(person.benutzerName)
        if (!istBenutzerNameEindeutig) {
            throw new Error(`Eine Person mit dem Benutzernamen ${person.benutzerName} existiert bereits.`)
        }
        return this.personRepository.legeAn(person)
    }

    private istBenutzerNameEindeutig(benutzerName: PersonenBenutzername): boolean {
        const person: Person = this.personRepository.findeBenutzerName(benutzerName);
        return !person;
    }
}
