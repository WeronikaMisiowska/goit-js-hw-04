function isEnoughCapacity(products, containerSize) {
    let totalProducts = 0;

    for (let product in products) {
        if (products.hasOwnProperty(product)) {
            totalProducts += products[product];
        }
    }

    return totalProducts <= containerSize;
}
