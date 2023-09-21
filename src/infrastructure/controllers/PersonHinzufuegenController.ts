import {Request, Response} from 'express';
import {PersonHinzufuegen} from "../../application/raum/PersonHinzufuegen";
import {Person} from "../../domain/model/Person";
import {PUT, route} from "awilix-express";

@route("/api/room/:raumNummer/person")
export class PersonHinzufuegenController {
    constructor(private personHinzufuegen: PersonHinzufuegen) {
    }

    @PUT()
    public async invoke(req: Request, res: Response): Promise<Response | void> {
        const raumNummer = req.params.raumNummer;

        const person: Person = new Person("vorname", "nachname", "vona", null)

        this.personHinzufuegen.ausfuehren(raumNummer, person);

        return res.json().status(201);
    }
}
