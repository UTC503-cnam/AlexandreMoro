"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var maybe_monad_1 = require("./maybe.monad");
var EmployeeRepository = /** @class */ (function () {
    function EmployeeRepository() {
        this.employees = [
            { id: 1, name: "John", supervisorId: maybe_monad_1.Maybe.none() },
            { id: 2, name: "Jane", supervisorId: maybe_monad_1.Maybe.some(1) },
            { id: 3, name: "Joe", supervisorId: maybe_monad_1.Maybe.some(2) },
        ];
    }
    EmployeeRepository.prototype.findById = function (id) {
        var results = this.employees.filter(function (employee) { return employee.id === id; });
        return results.length ? maybe_monad_1.Maybe.some(results[0]) : maybe_monad_1.Maybe.none();
    };
    return EmployeeRepository;
}());
exports.EmployeeRepository = EmployeeRepository;
