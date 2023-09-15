class Character {
    constructor() {
        this.distance = 1
    }

    set stoned(value) {
        this._stoned = value
    }

    get stoned() {
        return this._stoned
    }

    set attack(value) {
        this._attack = value
    }

    get attack() {
        const rangeEffect = (1 - 0.1 * (this.distance - 1))
        let attack = this._attack + rangeEffect;
        if (this._stoned) {
            attack -= Math.log(this.distance) * 5;
        }
        return Math.round(attack)
    }
}

class Magician extends Character {
    constructor() {
        super();
        this._attack = 100;
    }
}

class Daemon extends Character {
    constructor() {
        super();
        this._attack = 200;
    }
}