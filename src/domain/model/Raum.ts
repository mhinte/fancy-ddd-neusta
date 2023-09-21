import { v4 as uuid } from 'uuid';
import { PersonenId } from './Person';

export class Raum {

    public id: RaumId;
    public nummer: RaumNummer;
    public name: RaumName;
    private personenIds: PersonenId[];

    constructor(nummer: string, name: string) {
        if (!this.istNummerGueltig(nummer)) {
            return null
        }

        this.id = new RaumId(uuid())
        this.name = new RaumName(name)
        this.nummer = new RaumNummer(nummer)
        this.personenIds = []
    }

    private istNummerGueltig(nummer: string): boolean {
        return nummer.length === 4 && !isNaN(+nummer)
    }

    gibPersonenIds(): PersonenId[] {
        return this.personenIds
    }

    fuegePersonHinzu(personId: PersonenId) {
        if (personId !== null) {
            this.personenIds.push(personId)
            return true;
        }
        return false;
    }


    hatPerson(id: PersonenId): boolean {
        return this.personenIds.includes(id)
    }
}

export class RaumId {
    id: string

    constructor(id: string) {
        this.id = id;
    }
}


export class RaumNummer {
    raumNummer: string;

    constructor(raumNummer: string) {
        this.raumNummer = raumNummer
    }
}

export class RaumName {
    raumName: string;

    constructor(raumName: string) {
        this.raumName = raumName
    }
}