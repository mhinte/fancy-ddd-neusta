import { Request, Response } from 'express';
import { FindeRaum } from "../../application/raum/FindeRaum";
import { RaumId } from "../../domain/model/Raum";
import { GET, route } from "awilix-express";
import { RaumViewModel } from '../viewmodels/RaumViewModel';

@route("/api/room/:id")
export class FindeRaumController {
    constructor(private findeRaum: FindeRaum) {
    }

    @GET()
    public async invoke(req: Request, res: Response): Promise<Response | void> {
        const id: RaumId = new RaumId(req.params.id);

        const raumViewModel: RaumViewModel = this.findeRaum.ausfuehren(id);

        return res.json(raumViewModel).status(201);
    }
}
