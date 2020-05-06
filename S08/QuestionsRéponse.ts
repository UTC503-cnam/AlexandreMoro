const identity = <T>(t: T) => t;

console.log(identity(5));

class Maybe<T> {
  private constructor(private value: T | null) {}

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

  getOrElse(defaultValue: T) {
    return this.value === null ? defaultValue : this.value;
  }

  map<R>(f: (wrapped: T) => R): Maybe<R> {
    if (this.value === null) {
      return Maybe.none<R>();
    } else {
      return Maybe.fromValue(f(this.value));
    }
  }
}

interface Employee {
  id: number;
  name: string;
  supervisorId: Maybe<number>;
}

export class EmployeeRepository {
  private employees: Employee[] = [
    { id: 1, name: "John", supervisorId: Maybe.none() },
    { id: 2, name: "Jane", supervisorId: Maybe.some(1) },
    { id: 3, name: "Joe", supervisorId: Maybe.some(2) },
  ];

  findById(id: number): Maybe<Employee> {
    const results = this.employees.filter((employee) => employee.id === id);
    return results.length ? Maybe.some(results[0]) : Maybe.none();
  }
}
