import {Raum} from "../domain/Raum";
import {RaumRepository} from "../domain/RaumRepository";

export class RaumHinzufuegen {

    raumRepository: RaumRepository

    constructor(raumRepository: RaumRepository) {
        this.raumRepository = raumRepository
    }

    ausführen(raum: Raum): Raum {
        const istRaumnummerEindeutig = this.istRaumnummerEindeutig(raum.nummer)
        if (istRaumnummerEindeutig) {
            throw new Error(`Ein Raum mit der Nummer ${raum.nummer} existiert bereits.`)
        }
        return this.raumRepository.legeAn(raum)
    }


    private istRaumnummerEindeutig(nummer: string): boolean {
        const raum = this.raumRepository.findeRaumNummer(nummer);
        return !raum;
    }
}
