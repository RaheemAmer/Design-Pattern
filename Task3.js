//Builder

class CarShop {
    constructor(name, price, engine) {
        this.name = name;
        this.price = price;
        this.engine = engine;
    }
}
class CarBuilder {
    constructor(name, price, engine) {
        this.car_shop = new CarShop();
    }
    initial_Name(name) {
        this.car_shop.name = name;
        return this;
    }
    initial_Price(price) {
        this.car_shop.price = price;
        return this;
    }
    initial_Engine(engine) {
        this.car_shop.engine = engine;
        return this;
    }

    Build_Car() {
        console.log(this.car_shop);
        return this.car_shop;
    }
}
const Car = new CarBuilder().initial_Name("newCar1").initial_Price(50000000).initial_Engine(4500).Build_Car();
const Car2 = new CarBuilder().initial_Name("newCar2").initial_Price(800000000000).initial_Engine(3500).Build_Car();