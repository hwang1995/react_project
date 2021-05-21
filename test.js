const car = {
    company: 'Hyundaii',
    model: 'Grendizer',
    price: 50000000,
}

console.log(car);

const myCar = {
    ...car,
    model: "PORT ORT RT T"
}
console.log(car === myCar);

console.log(car);