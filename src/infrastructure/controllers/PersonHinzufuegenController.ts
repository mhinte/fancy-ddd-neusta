import {Request, Response} from 'express';
import {PersonHinzufuegen} from "../../application/raum/PersonHinzufuegen";
import {Person} from "../../domain/model/Person";
import {PUT, route} from "awilix-express";

@route("/api/room/:id/person")
export class PersonHinzufuegenController {
    constructor(private personHinzufuegen: PersonHinzufuegen) {
    }

    @PUT()
    public async invoke(req: Request, res: Response): Promise<Response | void> {
        const id: string = req.params.id;

        const person: Person = new Person(req.body.vorname, req.body.nachname, req.body.benutzerName, req.body.namensZusatz)

        this.personHinzufuegen.ausfuehren(id, person);

        return res.json().status(201);
    }
}
