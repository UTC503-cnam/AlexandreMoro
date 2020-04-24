export class Maybe<T> {
    private constructor(private value: T | null) {}

    static some<T>(value: T) {
        if (!value) {
            throw Error("Provided value must not be empty");
        }
        return new Maybe(value);
    }

    static none<T>() {
        return new Maybe<T>(null);
    }

    static fromValue<T>(value: T) {
        return value ? Maybe.some(value) : Maybe.none<T>();
    }

    static run<R>(gen: IterableIterator<Maybe<R>>): Maybe<R> {
        function step(value?) {
            const result = gen.next(value);
            if (result.done) {
                return result.value;
            }
            return result.value.flatMap(step);
        }
        return step();
    }

    map<R>(f: (wrapped: T) => R): Maybe<R> {
        if (this.value === null) {
            return Maybe.none<R>();
        } else {
            return Maybe.some(f(this.value));
        }
    }

    flatMap<R>(f: (wrapped: T) => Maybe<R>): Maybe<R> {
        if (this.value === null) {
            return Maybe.none<R>();
        } else {
            return f(this.value);
        }
    }

    getOrElse(defaultValue: T) {
        return this.value === null ? defaultValue : this.value;
    }
}