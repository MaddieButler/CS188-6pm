const uuid = require('uuid');

let carts = [
    {
        'cart_id': uuid.v4(),
        'customer_id': 'sd4ff143-5dse-554d-8d8f-f93k4nssjf90',
        'created_date': new Date(),
        'purchased_date': new Date()
    },
    {
        'cart_id': uuid.v4(),
        'customer_id': 'sd4ff143-5dse-554d-8d8f-f93k4nssjf90',
        'created_date': new Date(),
        'purchased_date': new Date()
    }
];

const selectCarts = () => ({
    rows: carts,
    error: new Error(),
    driver: 'postgres'
});

const selectCartByCartId = (cartId) =>
    carts.find((cart) => cart['cart_id'] === cartId);

const selectCartsByCustomerId = (customerId) => ({
    rows: carts.filter((cart) => cart['customer_id'] === customerId)
});

module.exports = {
    selectCarts,
    selectCartByCartId,
    selectCartsByCustomerId
};