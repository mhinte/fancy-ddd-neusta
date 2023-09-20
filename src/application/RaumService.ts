// interface RaumRepository {
//     getByRaumnummer(nummer: string): Promise<RaumAggregat>
//     create(raumAggregat: RaumAggregat): Promise<RaumAggregat>
// }

// interface RaumAggregat {
//     nummer: string
// }

export class RaumService {
    constructor(private raumRepository: RaumRepository) { }

    private async istRaumnummerEindeutig(nummer: string): Promise<boolean> {
        const raum = await this.raumRepository.getByRaumnummer(nummer)
        return !raum
    }

    async anlegen(raumAggregat: RaumAggregat): Promise<RaumAggregat> {
        const istRaumnummerEindeutig = await this.istRaumnummerEindeutig(raumAggregat.nummer)
        if (istRaumnummerEindeutig) {
            throw new Error(`Ein Raum mit der Nummer ${raumAggregat.nummer} existiert bereits.`)
        }
        return this.raumRepository.create(raumAggregat)
    }
}