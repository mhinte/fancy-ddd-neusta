import {asClass, createContainer} from "awilix";
import {scopePerRequest} from "awilix-express";
import {Application} from "express";
import {RaumHinzufuegen} from "./application/raum/RaumHinzufuegen";
import {FindeRaum} from "./application/raum/FindeRaum";
import {RaumRepositoryImpl} from "./infrastructure/RaumRepositoryImpl";
import {PersonHinzufuegen} from "./application/person/PersonHinzufuegen";
import {PersonZuRaumHinzufuegen} from "./application/raum/PersonZuRaumHinzufuegen";
import {PersonRepositoryImpl} from "./infrastructure/PersonRepositoryImpl";

export const loadContainer = (app: Application) => {
    const Container = createContainer({
        injectionMode: 'CLASSIC'
    })

    Container.register({
        raumRepository: asClass(RaumRepositoryImpl).scoped(),
        personRepository: asClass(PersonRepositoryImpl).scoped()
    })

    Container.register({
        raumHinzufuegen: asClass(RaumHinzufuegen).scoped(),
        personHinzufuegen: asClass(PersonHinzufuegen).scoped(),
        personZuRaumHinzufuegen: asClass(PersonZuRaumHinzufuegen).scoped(),
        findeRaum: asClass(FindeRaum).scoped()
    })

    app.use(scopePerRequest(Container));
}
