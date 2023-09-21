import { Person } from "./Person";

export interface PersonRepository {
    legeAn(person: Person): Person
    finde(id: string): Person
    findeBenutzerName(benutzerName: string): Person
}