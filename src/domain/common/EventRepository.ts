import {PersonWurdeRaumZugeordnetEvent} from "./PersonWurdeRaumZugeordnetEvent";

export interface EventRepository {
    senden(event: PersonWurdeRaumZugeordnetEvent): void
}