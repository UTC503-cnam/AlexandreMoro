"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var employee_repository_1 = require("./employee.repository");
var maybe_monad_1 = require("./maybe.monad");
var employeeIdInputEl = document.getElementById("employeeIdInput");
var findEmployeeButtonEl = document.getElementById("findEmployeeButton");
var searchResultsEl = document.getElementById("searchResults");
var repository = new employee_repository_1.EmployeeRepository();
findEmployeeButtonEl.addEventListener("click", function () {
    var supervisorName = getSupervisorName(maybe_monad_1.Maybe.fromValue(employeeIdInputEl.value));
    searchResultsEl.innerText = "Supervisor name: " + supervisorName.getOrElse("could not find");
});
function getSupervisorName(maybeEnteredId) {
    return maybe_monad_1.Maybe.run((function () {
        var enteredIdStr, enteredId, employee, supervisorId, supervisor;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, maybeEnteredId];
                case 1:
                    enteredIdStr = _a.sent();
                    enteredId = parseInt(enteredIdStr);
                    return [4 /*yield*/, repository.findById(enteredId)];
                case 2:
                    employee = _a.sent();
                    return [4 /*yield*/, employee.supervisorId];
                case 3:
                    supervisorId = _a.sent();
                    return [4 /*yield*/, repository.findById(supervisorId)];
                case 4:
                    supervisor = _a.sent();
                    return [2 /*return*/, maybe_monad_1.Maybe.some(supervisor.name)];
            }
        });
    })());
}
function numbers() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("Inside numbers; start");
                1;
                return [4 /*yield*/, 1];
            case 1:
                _a.sent();
                console.log("Inside numbers; after first yield");
                return [4 /*yield*/, 2];
            case 2:
                _a.sent();
                console.log("Inside numbers; end");
                return [2 /*return*/];
        }
    });
}
var numbersGenerator = numbers();
console.log("Outside of numbers");
console.log(numbersGenerator.next());
console.log("Outside of numbers; after first next");
console.log(numbersGenerator.next());
console.log("Outside of numbers; after second next");
