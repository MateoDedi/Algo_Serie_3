function getTotalPrice(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        let product = arr[i];
        if (product.hasOwnProperty('price') && product.hasOwnProperty('quantity')) {
            sum += product.price * product.quantity;
        }
    }
    return sum;
}

console.log(getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.50 },
    { product: "Cereals", quantity: 1, price: 2.50 }
  ]));

console.log(getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.50 },
    { product: "Eggs", quantity: 12, price: 0.10 },
    { product: "Bread", quantity: 2, price: 1.60 },
    { product: "Cheese", quantity: 1, price: 4.50 }
  ]));