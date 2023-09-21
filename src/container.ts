import {asClass, createContainer} from "awilix";
import {scopePerRequest} from "awilix-express";
import {Application} from "express";
import {RaumHinzufuegen} from "./application/raum/RaumHinzufuegen";
import {FindeRaum} from "./application/raum/FindeRaum";
import {RaumRepositoryImpl} from "./infrastructure/raum/RaumRepositoryImpl";
import {PersonHinzufuegen} from "./application/person/PersonHinzufuegen";
import {PersonZuRaumHinzufuegen} from "./application/common/PersonZuRaumHinzufuegen";
import {PersonRepositoryImpl} from "./infrastructure/person/PersonRepositoryImpl";

export const loadContainer = (app: Application) => {
    const Container = createContainer({
        injectionMode: 'CLASSIC'
    })

    Container.register({
        raumRepository: asClass(RaumRepositoryImpl).scoped(),
        personRepository: asClass(PersonRepositoryImpl).scoped(),
        eventRepository: asClass(PersonRepositoryImpl).scoped()
    })

    Container.register({
        raumHinzufuegen: asClass(RaumHinzufuegen).scoped(),
        findeRaum: asClass(FindeRaum).scoped(),
        personHinzufuegen: asClass(PersonHinzufuegen).scoped(),
        personZuRaumHinzufuegen: asClass(PersonZuRaumHinzufuegen).scoped()
    })

    app.use(scopePerRequest(Container));
}
