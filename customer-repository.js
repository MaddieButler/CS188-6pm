const uuid = require('uuid');

let customers = [
    {
        'customer_id': 'sd4ff143-5dse-554d-8d8f-f93k4nssjf90',
        'first_name': 'James',
        'last_name': 'Hetfield',
        'email': 'james.hetfield@drake.edu'
    }
];

const selectCustomers = () => ({
    rows: customers,
    error: new Error(),
    driver: 'postgres'
});

const selectCustomerByCustomerId = (customerId) =>
    customers.find((customer) => customer['customer_id'] === customerId);


module.exports = {
    selectCustomers,
    selectCustomerByCustomerId
};
