const app = document.getElementById('app');

const ageInput = app.querySelector('input[name="age"]');
// console.log(ageInput);

const kmInput = app.querySelector('input[name="km"]');
// console.log(kmInput);

const buttonCalc = document.getElementById('btnCalc');
// console.log(buttonCalc);

const buttonCanc = document.getElementById('btnCanc');
// console.log(buttonCanc);


buttonCalc.addEventListener('click', function() {
    let passengerAge = ageInput.value;
    let kilometersNumber = kmInput.value;
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
    let message = 'Ticket price: ';
    const ticket = document.getElementById('ticket');
    ticket.innerHTML = `${message}${totalPrice.toFixed(2) + '€'}`;
    ticket.classList.remove ("d-none");
});

buttonCanc.addEventListener('click', function() {
    ageInput.value = '';
    kmInput.value = '';
    ticket.classList.toggle ("d-none");
});