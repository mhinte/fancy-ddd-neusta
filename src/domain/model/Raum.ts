import {v4 as uuid} from 'uuid';


export class Raum {

    public id: RaumId;
    public nummer: RaumNummer;
    public name: RaumName;
    private personenIds: PersonenIds;

    constructor(nummer: string, name: string) {
        if (!this.istNummerGueltig(nummer)) {
            return null
        }

        this.id = new RaumId(uuid())
        this.name = new RaumName(name)
        this.nummer = new RaumNummer(nummer)
        this.personenIds = new PersonenIds()
    }

    private istNummerGueltig(nummer: string): boolean {
        return nummer.length === 4 && !isNaN(+nummer)
    }
}

class RaumId {
    id: string

    constructor(id: string) {
        this.id = id;
    }
}


class RaumNummer {
    raumNummer: string;

    constructor(raumNummer: string) {
        this.raumNummer = raumNummer
    }
}

class RaumName {
    raumName: string;

    constructor(raumName: string) {
        this.raumName = raumName
    }
}

class PersonenIds {
    private personenIds: Array<string>;

    constructor() {
        this.personenIds = []
    }


    gibPersonenIds(): string[] {
        return this.personenIds
    }

    fuegePersonHinzu(personId: string) {
        if (personId !== null) {
            this.personenIds.push(personId)
            return true;
        }
        return false;
    }


    hatPerson(id: string): boolean {
        return this.personenIds.includes(id)
    }
}
