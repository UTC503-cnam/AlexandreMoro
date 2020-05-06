const identity = <T>(t: T) => t;

console.log(identity(5));

class Maybe<T> {
  private constructor(value: T | null) {}

  static some<T>(value: T) {
    if (!value) {
      throw Error(`La valeur fournie ne peut être nulle`);
    }
    return new Maybe(value);
  }

  static none<T>() {
    return new Maybe<T>(null);
  }

  static fromValue<T>(value: T) {
    return value ? Maybe.some(value) : Maybe.none<T>();
  }
}
