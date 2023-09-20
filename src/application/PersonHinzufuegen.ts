import {Raum} from "../domain/Raum";
import {RaumRepository} from "../domain/RaumRepository";
import {Person} from "../domain/Person";

export class PersonHinzufuegen{

    raumRepository : RaumRepository

    constructor(raumRepository: RaumRepository)
    {
        this.raumRepository = raumRepository
    }
    ausführen(raum: Raum, person: Person): boolean {
        const istPersonInRaum = this.istInRaum(person.id)
        if (istPersonInRaum) {
            throw new Error(`Die Person mit der Id ${person.id} ist bereits in einem Raum.`)
        }
        return raum.fuegePersonHinzu(person)
    }


    private istInRaum(id: string): boolean {
        const raum: Raum = this.raumRepository.findeRaumMitPerson(id)
        return !!raum;
    }
}
