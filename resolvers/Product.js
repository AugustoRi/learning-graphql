module.exports = {
    priceWithDiscount(payload) {
        return payload.discount ? payload.price - (payload.price * payload.discount) : payload.price;
    }
}