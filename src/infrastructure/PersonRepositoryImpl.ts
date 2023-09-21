import { Person } from "../domain/model/Person";
import { PersonRepository } from "../domain/model/PersonRepository";

const personen: Person[] = []

export class PersonRepositoryImpl implements PersonRepository {
    finde(id: string): Person {
        return personen.find(r => r.id === id)
    }
    findeBenutzerName(benutzerName: string): Person {
        return personen.find(r => r.benutzerName === benutzerName)
    }

    legeAn(person: Person): Person {
        personen.push(person)
        return person
    }
}
