import {NamensZusatz} from "./enum/NamensZusatz"
import {v4 as uuid} from 'uuid';
import {GenericValueObject} from "../common/GenericValueObject";

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
        return `${this.vorname} ${this.namensZusatz || ''} ${this.nachname} (${this.benutzerName})`
    }
}

export class PersonenId extends GenericValueObject<string>{
}

export class PersonenVorname extends GenericValueObject<string>{
}

export class PersonenNachname extends GenericValueObject<string> {
}

export class PersonenBenutzername extends GenericValueObject<string>{
}
