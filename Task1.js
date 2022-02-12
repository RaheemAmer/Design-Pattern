//Observable
class StoreShop {
    constructor() {
        this.productName = "";
        this.customers = [];
    }

    NewProducts(title) {
        this.productName = title;
        this.notifyAll();
    }

    notifyAll() {
        return this.customers.forEach((cust) => cust.update(this));
    }

    register(persons) {
        this.customers.push(persons);
    }
}

class Person {
    update(store) {
        console.log(`new Products uploaded name:  ${store.productName}`);
    }
}

const Store = new StoreShop();
const abdo = new Person();
const ali = new Person();

Store.register(abdo);
Store.NewProducts("Te-Shirt");
Store.register(ali);
Store.NewProducts("Shoes");