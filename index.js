// Write your solution in this file!
var customerName = "bob";

console.log(customerName)

// function upperCaseCustomerName() {
//     var upperCaseCustomerName = 'BOB';
//     console.log(upperCaseCustomerName)
// }

// upperCaseCustomerName()

function upperCaseCustomerName(){
    customerName = customerName.toLocaleUpperCase();
}

function setBestCustomer(){
    bestCustomer = "not bob"
}

function overwriteBestCustomer(){
    bestCustomer = "maybe bob"
}

const leastFavoriteCustomer = "billy"

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "not billy"
}

