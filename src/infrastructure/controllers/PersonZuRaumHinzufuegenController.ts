import {Request, Response} from 'express';
import {PUT, route} from "awilix-express";
import {PersonZuRaumHinzufuegen} from "../../application/raum/PersonZuRaumHinzufuegen";
import {PersonenId, RaumId} from "../../domain/model/Raum";

@route("/api/room/:roomId/person/:personId")
export class PersonHinzufuegenController {
    constructor(private personZuRaumHinzufuegen: PersonZuRaumHinzufuegen) {
    }

    @PUT()
    public async invoke(req: Request, res: Response): Promise<Response | void> {
        const roomId: RaumId = new RaumId(req.params.roomId);
        const personId: PersonenId = new PersonenId(req.params.personId);

        if (!roomId || !personId) {
            throw new Error("RaumId oder PersonenId darf nicht leer sein")
        }

        const response: boolean = this.personZuRaumHinzufuegen.ausfuehren(roomId, personId);

        if (response) {
            return res.json(response).status(200);
        }
        return res.status(404);
    }
}
