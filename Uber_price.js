class Uberprice {
  constructor(basePrice, costPerKm, costPerMin) {
    this.basePrice = basePrice;
    this.costPerKm = costPerKm;
    this.costPerMin = costPerMin;
  }

  calculatePrice(distance, time) {
    let fare =
      this.basePrice + distance * this.costPerKm + time * this.costPerMin;
    return fare;
  }
}

let ride = new Uberprice(60, 8, 0.9);
let distance = 10;
let time = 15;

let price = ride.calculatePrice(distance, time);
console.log(
  `The estimated cost price for the ride is ${price.toFixed(2)} rupees`
);
