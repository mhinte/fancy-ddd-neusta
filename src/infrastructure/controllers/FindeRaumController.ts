import {Request, Response} from 'express';
import {FindeRaum} from "../../application/raum/FindeRaum";
import {Raum} from "../../domain/model/Raum";
import {GET, route} from "awilix-express";

@route("/api/room/:raumNummer")
export class FindeRaumController {
    constructor(private findeRaum: FindeRaum) {
    }

    @GET()
    public async invoke(req: Request, res: Response): Promise<Response | void> {
        const raumNummer: string = req.params.raumNummer;

        const raum: Raum = this.findeRaum.ausfuehren(raumNummer);

        return res.json(raum).status(201);
    }
}
