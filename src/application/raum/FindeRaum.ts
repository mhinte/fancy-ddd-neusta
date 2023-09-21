import {RaumRepository} from "../../domain/model/RaumRepository";
import {Raum, RaumId} from "../../domain/model/Raum";

export class FindeRaum {

    raumRepository: RaumRepository

    constructor(raumRepository: RaumRepository) {
        this.raumRepository = raumRepository
    }

    ausfuehren(id: RaumId): Raum {
        return this.raumRepository.finde(id)
    }
}
