import { Raum, RaumId, RaumName, RaumNummer } from "../../../domain/raum/Raum"

export class RaumViewModel {
    id: RaumId
    name: RaumName
    nummer: RaumNummer
    personenKurznamen: string[]

    constructor(raum: Raum, personenKurzNamen: string[]) {
        this.id = raum.id
        this.name = raum.name
        this.nummer = raum.nummer
        this.personenKurznamen = personenKurzNamen
    }
}
