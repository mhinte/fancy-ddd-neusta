import {v4 as uuid} from 'uuid';

export class Raum {

    public id: string;
    public nummer: string;
    public name: string;
    private personenIds: Array<string>;

    constructor(nummer: string, name: string) {
        if (!this.istNummerGueltig(nummer)) {
            return null
        }

        this.id = uuid()
        this.personenIds = []
        this.name = name
        this.nummer = nummer
    }

    fuegePersonHinzu(personId: string) {
        if (personId !== null) {
            this.personenIds.push(personId)
            return true;
        }
        return false;
    }

    gibPersonenIds(): string[] {
        return this.personenIds
    }

    hatPerson(id: string): boolean {
        return this.personenIds.includes(id)
    }

    private istNummerGueltig(nummer: string): boolean {
        return nummer.length === 4 && !isNaN(+nummer)
    }
}
