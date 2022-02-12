class Shipment {
    constructor(pickupDate, deliveryDate, commodities, destination) {
        this.pickupDate = pickupDate;
        this.deliveryDate = deliveryDate;
        this, (commodities = commodities);
        this.destination = destination;
    }
}

class PlaygroundShip extends Shipment {
    constructor(pickupDate, deliveryDate, commodities, destination) {
        super(pickupDate, deliveryDate, commodities, destination);
    }
}

class AirShip extends Shipment {
    constructor(pickupDate, deliveryDate, commodities, destination) {
        super(pickupDate, deliveryDate, commodities, destination);
    }
}