import {RaumRepository} from "../../domain/model/RaumRepository";
import {Raum} from "../../domain/model/Raum";
import {Person} from "../../domain/model/Person";

export class PersonHinzufuegen {

    raumRepository: RaumRepository

    constructor(raumRepository: RaumRepository) {
        this.raumRepository = raumRepository
    }

    ausfuehren(raumNummer: string, person: Person): boolean {
        const istPersonInRaum = this.istInRaum(person.id)
        if (istPersonInRaum) {
            throw new Error(`Die Person mit der Id ${person.id} ist bereits in einem Raum.`)
        }

        const raum: Raum = this.raumRepository.findeRaumMitNummer(raumNummer)

        return raum.fuegePersonHinzu(person)
    }


    private istInRaum(id: string): boolean {
        const raum: Raum = this.raumRepository.findeRaumMitPerson(id)
        return !!raum;
    }
}
