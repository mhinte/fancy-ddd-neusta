import { NamensZusatz } from "./enum/NamensZusatz"
import { v4 as uuid } from 'uuid';

export class Person {
    id: PersonenId
    vorname: PersonenVorname
    nachname: PersonenNachname
    namensZusatz?: NamensZusatz
    benutzerName: PersonenBenutzername

    constructor(vorname: string, nachname: string, benutzerName: string, namensZusatz?: NamensZusatz) {
        if (namensZusatz && !Object.values(NamensZusatz).includes(namensZusatz)) {
            throw new Error('Namenszusatz ' + namensZusatz + ' ist nicht erlaubt.')
        }

        this.vorname = new PersonenVorname(vorname)
        this.nachname = new PersonenNachname(nachname)
        this.benutzerName = new PersonenBenutzername(benutzerName)
        this.namensZusatz = namensZusatz
        this.id = new PersonenId(uuid())
    }

    gibKurzbeschreibung(): string {
        return `${this.vorname} ${this.namensZusatz || ''} ${this.nachname} (${this.benutzerName})`
    }
}

export class PersonenId {
    id: string

    constructor(id: string) {
        this.id = id;
    }
}

export class PersonenVorname {
    personenVorname: string;

    constructor(personVorname: string) {
        this.personenVorname = personVorname
    }
}

export class PersonenNachname {
    personenNachname: string;

    constructor(personNachname: string) {
        this.personenNachname = personNachname
    }
}

export class PersonenBenutzername {
    personenBenutzername: string;

    constructor(personBenutzername: string) {
        this.personenBenutzername = personBenutzername
    }
}
