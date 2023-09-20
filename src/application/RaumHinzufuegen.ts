import {Raum} from "../domain/Raum";
import {RaumRepository} from "../domain/RaumRepository";

export class RaumHinzufuegen{

    raumRepository : RaumRepository

    constructor(raumRepository: RaumRepository)
    {
        this.raumRepository = raumRepository
    }
    async ausführen(raum: Raum): Promise<Raum> {
        const istRaumnummerEindeutig = await this.istRaumnummerEindeutig(raum.nummer)
        if (istRaumnummerEindeutig) {
            throw new Error(`Ein Raum mit der Nummer ${raum.nummer} existiert bereits.`)
        }
        return this.raumRepository.legeAn(raum)
    }


    private async istRaumnummerEindeutig(nummer: string): Promise<boolean> {
        const raum = await this.raumRepository.findeRaumNummer(nummer)
        return !raum
    }
}
