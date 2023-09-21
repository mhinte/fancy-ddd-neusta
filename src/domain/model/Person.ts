import {NamensZusatz} from "../enum/NamensZusatz"
import {v4 as uuid} from 'uuid';

export class Person {
    id: string
    vorname: string
    nachname: string
    namensZusatz?: NamensZusatz
    benutzerName: string

    constructor(vorname: string, nachname: string, benutzerName: string, namensZusatz?: NamensZusatz) {
        this.vorname = vorname
        this.nachname = nachname
        this.benutzerName = benutzerName
        this.namensZusatz= namensZusatz
        this.id = uuid()
    }

    gibKurzbeschreibung(): string {
        return `${this.vorname} ${this.namensZusatz || ''} ${this.nachname} (${this.benutzerName})`
    }
}
