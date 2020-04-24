"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Maybe = /** @class */ (function () {
    function Maybe(value) {
        this.value = value;
    }
    Maybe.some = function (value) {
        if (!value) {
            throw Error("Provided value must not be empty");
        }
        return new Maybe(value);
    };
    Maybe.none = function () {
        return new Maybe(null);
    };
    Maybe.fromValue = function (value) {
        return value ? Maybe.some(value) : Maybe.none();
    };
    Maybe.run = function (gen) {
        function step(value) {
            var result = gen.next(value);
            if (result.done) {
                return result.value;
            }
            return result.value.flatMap(step);
        }
        return step();
    };
    Maybe.prototype.map = function (f) {
        if (this.value === null) {
            return Maybe.none();
        }
        else {
            return Maybe.some(f(this.value));
        }
    };
    Maybe.prototype.flatMap = function (f) {
        if (this.value === null) {
            return Maybe.none();
        }
        else {
            return f(this.value);
        }
    };
    Maybe.prototype.getOrElse = function (defaultValue) {
        return this.value === null ? defaultValue : this.value;
    };
    return Maybe;
}());
exports.Maybe = Maybe;
