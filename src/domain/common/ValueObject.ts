export class ValueObject<T> {
    value: T;

    constructor(value: T) {
        this.value = value
    }

    equals(value: any): boolean {
        return this.value === value
    }
}
