import {RaumRepository} from "../../domain/model/RaumRepository";
import {Raum} from "../../domain/model/Raum";

export class FindeRaum {

    raumRepository: RaumRepository

    constructor(raumRepository: RaumRepository) {
        this.raumRepository = raumRepository
    }

    ausfuehren(raumNummer: string): Raum {
        return this.raumRepository.finde(raumNummer)
    }
}
