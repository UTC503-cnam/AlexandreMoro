function Identity(value) {
  this.value = value;
}

Identity.prototype.bind = function (transform) {
  return transform(this.value);
};

Identity.prototype.toString = function () {
  return "Identity(" + this.value + ")";
};

var result = new Identity(5).bind((value) =>
  new Identity(6).bind((value2) => new Identity(value + value2))
);

console.log(result);
