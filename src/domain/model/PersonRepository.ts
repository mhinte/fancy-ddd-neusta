import { Person, PersonenBenutzername } from "./Person";

export interface PersonRepository {
    legeAn(person: Person): Person
    finde(id: string): Person
    findeBenutzerName(benutzerName: PersonenBenutzername): Person
}