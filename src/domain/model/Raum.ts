import {v4 as uuid} from 'uuid';

import {Person} from "./Person";

export class Raum {

    public id: string;
    public nummer: string;
    public name: string;
    private personen: Array<Person>;

    constructor(nummer: string, name: string) {
        if (!this.istNummerGueltig(nummer)) {
            return null
        }

        this.id = uuid()
        this.personen = []
        this.name = name
        this.nummer = nummer
    }

    fuegePersonHinzu(person: Person) {
        if (person !== null) {
            this.personen.push(person)
            return true;
        }
        return false;
    }

    private istNummerGueltig(nummer: string): boolean {
        return nummer.length === 4 && !isNaN(+nummer)
    }
}
