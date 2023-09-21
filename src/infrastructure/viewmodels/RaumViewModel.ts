import { Raum } from "../../domain/model/Raum"

export class RaumViewModel {
    id: string
    name: string
    nummer: string
    personen: string[]
    constructor(raum: Raum) {
        this.id = raum.id
        this.name = raum.name
        this.nummer = raum.nummer
        this.personen = raum.gibPersonen()
    }
}