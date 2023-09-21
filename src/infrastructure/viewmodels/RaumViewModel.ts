import {Raum, RaumId, RaumName, RaumNummer} from "../../domain/model/Raum"
import {PersonenId} from "../../domain/model/Person";

export class RaumViewModel {
    id: RaumId
    name: RaumName
    nummer: RaumNummer
    personen: PersonenId[]

    constructor(raum: Raum) {
        this.id = raum.id
        this.name = raum.name
        this.nummer = raum.nummer
        this.personen = raum.gibPersonenIds()
    }
}
