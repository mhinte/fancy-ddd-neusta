import {RaumRepository} from "../../domain/raum/RaumRepository";
import {Raum, RaumNummer} from "../../domain/raum/Raum";

export class RaumHinzufuegen {

    raumRepository: RaumRepository

    constructor(raumRepository: RaumRepository) {
        this.raumRepository = raumRepository
    }

    ausfuehren(raum: Raum): Raum {
        const istRaumnummerEindeutig: boolean = this.istRaumnummerEindeutig(raum.nummer)
        if (!istRaumnummerEindeutig) {
            throw new Error(`Ein Raum mit der Nummer ${raum.nummer} existiert bereits.`)
        }
        return this.raumRepository.legeAn(raum)
    }

    private istRaumnummerEindeutig(nummer: RaumNummer): boolean {
        const raum: Raum = this.raumRepository.findeRaumMitNummer(nummer);
        return !raum;
    }
}
