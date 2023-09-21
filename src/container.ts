import {asClass, createContainer} from "awilix";
import {scopePerRequest} from "awilix-express";
import {Application} from "express";
import {RaumHinzufuegen} from "./application/raum/RaumHinzufuegen";
import {PersonHinzufuegen} from "./application/raum/PersonZuRaumHinzufuegen";
import {FindeRaum} from "./application/raum/FindeRaum";
import {RaumRepositoryImpl} from "./infrastructure/RaumRepositoryImpl";

export const loadContainer = (app: Application) => {
    const Container = createContainer({
        injectionMode: 'CLASSIC'
    })

    Container.register({
        raumRepository: asClass(RaumRepositoryImpl).scoped()
    })

    Container.register({
        raumHinzufuegen: asClass(RaumHinzufuegen).scoped(),
        personHinzufuegen: asClass(PersonHinzufuegen).scoped(),
        findeRaum: asClass(FindeRaum).scoped()
    })

    app.use(scopePerRequest(Container));
}
