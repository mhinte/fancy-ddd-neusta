import {Request, Response} from 'express';
import {RaumHinzufuegen} from "../../application/raum/RaumHinzufuegen";
import {Raum} from "../../domain/model/Raum";
import {POST, route} from "awilix-express";

@route("/api/room")
export class RaumHinzufuegenController {
    constructor(private raumHinzufuegen: RaumHinzufuegen) {
    }

    @POST()
    public async invoke(req: Request, res: Response): Promise<Response | void> {
        const raumNummer: string = req.body.raumNummer;
        const name: string = req.body.name;

        const neuerRaum: Raum = new Raum(raumNummer, name)
        const response: Raum = this.raumHinzufuegen.ausfuehren(neuerRaum)

        return res.json(response).status(201);
    }
}
