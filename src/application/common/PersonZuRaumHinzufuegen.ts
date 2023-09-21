import { RaumRepository } from "../../domain/raum/RaumRepository";
import { Raum, RaumId } from "../../domain/raum/Raum";
import { Person, PersonenId } from "../../domain/person/Person";
import { PersonRepository } from "../../domain/person/PersonRepository";
import { EventRepository } from "../../domain/common/EventRepository";
import { PersonWurdeRaumZugeordnetEvent } from "../../domain/common/PersonWurdeRaumZugeordnetEvent";

export class PersonZuRaumHinzufuegen {

    raumRepository: RaumRepository
    personRepository: PersonRepository
    eventRepository: EventRepository

    constructor(raumRepository: RaumRepository, personRepository: PersonRepository, eventRepository: EventRepository) {
        this.raumRepository = raumRepository
        this.personRepository = personRepository
        this.eventRepository = eventRepository
    }

    ausfuehren(raumId: RaumId, personId: PersonenId): boolean {
        const raum: Raum = this.raumRepository.finde(raumId)
        if (!raum) {
            throw new Error(`Der Raum existiert nicht.`)
        }

        const person: Person = this.personRepository.finde(personId)
        if (!person) {
            throw new Error(`Die Person existiert nicht.`)
        }

        if (raum.hatPerson(personId)) {
            throw new Error(`Die Person mit der Id ${personId} ist bereits in dem Raum ${raum.name}.`)
        }

        const raumMitPerson = raum.fuegePersonHinzu(personId)
        const event = new PersonWurdeRaumZugeordnetEvent(personId, raumId)
        this.eventRepository.senden(event)
        return raumMitPerson
    }
}
