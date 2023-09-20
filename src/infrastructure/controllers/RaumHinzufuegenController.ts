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

        const raum: Raum = new Raum(raumNummer, name)

        this.raumHinzufuegen.ausfuehren(raum)

        return res.json(raum).status(201);
    }
}
