class Nissan {

    constructor(speed, price, weight) {
        this.speed = speed;
        this.price = price;
        this.weight = weight;
    }

    returnModelPrice() {
        return `Nissan Price ${this.price} `
    }

}


class Kia {
    constructor(speed, price, weight) {
        this.speed = speed;
        this.price = price;
        this.weight = weight;
    }

    returnModelPrice() {
        return `Kia Price ${this.price} `
    }

}

class carFactory {

    constructor(carType) {
        this.carType = carType
    }

    returnModelPrice() {

        switch (this.carType) {
            case "Nissan":
                return new Nissan(350, 25000000, "1,324 kilograms")
            case "Kia":
                return new Kia(400, 400000000, "1,800 kilograms")
            default:
                console.log(" please enter valid type ")
        }
    }
}


const kia = new carFactory("Kia")
console.log(kia.returnModelPrice())


const nissan = new carFactory("Nissan")
console.log(nissan.returnModelPrice())

// mynissan.returnModelPrice()