import {NamensZusatz} from "./enum/NamensZusatz"
import {v4 as uuid} from 'uuid';
import {ValueObject} from "../common/ValueObject";

export class Person {
    personenId: PersonenId
    vorname: PersonenVorname
    nachname: PersonenNachname
    namensZusatz?: NamensZusatz
    benutzerName: PersonenBenutzername

    constructor(vorname: string, nachname: string, benutzerName: string, namensZusatz?: NamensZusatz) {
        if (namensZusatz && !Object.values(NamensZusatz).includes(namensZusatz)) {
            throw new Error('Namenszusatz ' + namensZusatz + ' ist nicht erlaubt.')
        }

        this.personenId = new PersonenId(uuid())
        this.vorname = new PersonenVorname(vorname)
        this.nachname = new PersonenNachname(nachname)
        this.namensZusatz = namensZusatz
        this.benutzerName = new PersonenBenutzername(benutzerName)
    }

    gibKurzbeschreibung(): string {
        return `${this.vorname.value} ${this.namensZusatz || ''} ${this.nachname.value} (${this.benutzerName.value})`
    }
}

export class PersonenId extends ValueObject<string> {
}

export class PersonenVorname extends ValueObject<string> {
}

export class PersonenNachname extends ValueObject<string> {
}

export class PersonenBenutzername extends ValueObject<string> {
}
