abstract class Human {
  abstract canClaimTheThrone(): boolean;
}

class Lannister extends Human {
  money: number;

  constructor(money: number) {
    super();
    this.money = money;
  }

  hasEnougthMoney(): boolean {
    return this.money > 1000000000;
  }

  canClaimTheThrone(): boolean {
    return this.hasEnougthMoney();
  }
}

class Targaryen extends Human {
  private maxDegres: number;

  constructor(maxDegres: number) {
    super();
    this.maxDegres = maxDegres;
  }

  isFireResistant(): boolean {
    return this.maxDegres > 3000;
  }

  canClaimTheThrone(): boolean {
    return this.isFireResistant();
  }
}

var tywinInheritance = 876543211;

var jaime = new Lannister(234567899 + tywinInheritance);
var cersei = new Lannister(122345678 + tywinInheritance);
var tyrion = new Lannister(1111111111 + tywinInheritance);
var daenerys = new Targaryen(8000);
var viserys = new Targaryen(37.5);

var res = [jaime, cersei, tyrion, daenerys, viserys].map((human) =>
  human.canClaimTheThrone()
);

console.log(res);
