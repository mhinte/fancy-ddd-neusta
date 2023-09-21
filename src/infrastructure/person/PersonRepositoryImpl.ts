import {Person, PersonenBenutzername, PersonenId} from "../../domain/person/Person";
import { PersonRepository } from "../../domain/person/PersonRepository";

const personen: Person[] = []

export class PersonRepositoryImpl implements PersonRepository {
    finde(id: PersonenId): Person {
        return personen.find(r => r.id === id)
    }
    findeBenutzerName(benutzerName: PersonenBenutzername): Person {
        return personen.find(r => r.benutzerName === benutzerName)
    }

    legeAn(person: Person): Person {
        personen.push(person)
        return person
    }
}
