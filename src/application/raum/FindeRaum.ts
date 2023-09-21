import {RaumRepository} from "../../domain/model/RaumRepository";
import {Raum} from "../../domain/model/Raum";

export class FindeRaum {

    raumRepository: RaumRepository

    constructor(raumRepository: RaumRepository) {
        this.raumRepository = raumRepository
    }

    ausfuehren(id: string): Raum {
        return this.raumRepository.finde(id)
    }
}
