import {Person, PersonenBenutzername, PersonenId} from "../../domain/person/Person";
import { PersonRepository } from "../../domain/person/PersonRepository";

const personen: Person[] = []

export class PersonRepositoryImpl implements PersonRepository {
    finde(personenId: PersonenId): Person {
        return personen.find((person: Person) => person.personenId.equals(personenId.value))
    }
    findeBenutzerName(benutzerName: PersonenBenutzername): Person {
        return personen.find((person: Person): boolean => person.benutzerName.equals(benutzerName.value))
    }

    legeAn(person: Person): Person {
        personen.push(person)
        return person
    }
}
