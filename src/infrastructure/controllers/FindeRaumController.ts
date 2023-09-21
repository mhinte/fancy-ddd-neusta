import {Request, Response} from 'express';
import {FindeRaum} from "../../application/raum/FindeRaum";
import {Raum} from "../../domain/model/Raum";
import {GET, route} from "awilix-express";

@route("/api/room/:id")
export class FindeRaumController {
    constructor(private findeRaum: FindeRaum) {
    }

    @GET()
    public async invoke(req: Request, res: Response): Promise<Response | void> {
        const id: string = req.params.id;

        const raum: Raum = this.findeRaum.ausfuehren(id);

        return res.json(raum).status(201);
    }
}
