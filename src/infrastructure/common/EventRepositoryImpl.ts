import { EventRepository } from "../../domain/common/EventRepository";
import { PersonWurdeRaumZugeordnetEvent } from "../../domain/common/PersonWurdeRaumZugeordnetEvent";

const events: PersonWurdeRaumZugeordnetEvent[] = []

export class EventRepositoryImpl implements EventRepository {
    senden(event: PersonWurdeRaumZugeordnetEvent): void {
        events.push(event)
    }
}