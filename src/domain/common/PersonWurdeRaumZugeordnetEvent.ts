import {PersonenBenutzername, PersonenId, PersonenNachname, PersonenVorname} from "../person/Person";
import {RaumId} from "../raum/Raum";

export class PersonWurdeRaumZugeordnetEvent {
    personenId: PersonenId
    raumId: RaumId

    constructor(personenId: PersonenId, raumId: RaumId) {
        this.personenId = personenId
        this.raumId = raumId
    }
}