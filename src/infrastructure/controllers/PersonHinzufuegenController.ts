import {Request, Response} from 'express';
import {Person} from "../../domain/model/Person";
import {POST, route} from "awilix-express";
import {PersonHinzufuegen} from "../../application/person/PersonHinzufuegen";

@route("/api/person")
export class PersonHinzufuegenController {
    constructor(private personHinzufuegen: PersonHinzufuegen) {
    }

    @POST()
    public async invoke(req: Request, res: Response): Promise<Response | void> {
        const neuePerson: Person = new Person(req.body.vorname, req.body.nachname, req.body.benutzerName, req.body.namensZusatz)

        const response: Person = this.personHinzufuegen.ausfuehren(neuePerson);

        return res.json(response).status(201);
    }
}
