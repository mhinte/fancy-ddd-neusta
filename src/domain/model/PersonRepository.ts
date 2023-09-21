import {Person, PersonenBenutzername, PersonenId} from "./Person";

export interface PersonRepository {
    legeAn(person: Person): Person
    finde(id: PersonenId): Person
    findeBenutzerName(benutzerName: PersonenBenutzername): Person
}
