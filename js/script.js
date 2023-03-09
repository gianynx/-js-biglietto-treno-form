const app = document.getElementById('app');

const ageInput = app.querySelector('input[name="age"]');
// console.log(ageInput);

const kmInput = app.querySelector('input[name="km"]');
// console.log(kmInput);

const button = document.querySelector('#btn');
button.addEventListener('click', function() {
    const kilometersNumber;
    const passengerAge;
    const centsKm = 0.21;
    const ticketPrice = kilometersNumber * centsKm;
    let totalPrice = ticketPrice;
    const discount_20 = (ticketPrice * 20) / 100;
    const discount_40 = (ticketPrice * 40) / 100;
    if (passengerAge < 18) {
        totalPrice = totalPrice - discount_20;
    }
    if (passengerAge >= 65) {
        totalPrice = totalPrice - discount_40;
    }
    let messagge = 'Il prezzo totale del biglietto è di ';
    document.getElementById("total_price").innerHTML = messagge + totalPrice.toFixed(2) + '€ !';
});