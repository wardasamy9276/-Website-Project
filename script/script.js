
const destinationSelect = document.getElementById('destination');
const passengersInput = document.getElementById('passengers');
const totalPriceSpan = document.getElementById('totalPrice');
const bookingForm = document.getElementById('bookingForm');

// Update total price
function updatePrice() {
  const selectedOption = destinationSelect.options[destinationSelect.selectedIndex];
  const pricePerPerson = selectedOption ? parseInt(selectedOption.dataset.price || 0) : 0;
  const passengers = parseInt(passengersInput.value) || 1;
  totalPriceSpan.textContent = pricePerPerson * passengers;
}

// Event listeners
destinationSelect.addEventListener('change', updatePrice);
passengersInput.addEventListener('input', updatePrice);

// Form submission
bookingForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const destination = destinationSelect.value;
  const departure = document.getElementById('departure').value;
  const returnDate = document.getElementById('return').value;
  const passengers = passengersInput.value;
  const totalPrice = totalPriceSpan.textContent;

  if (!destination || !departure || !returnDate || passengers < 1) {
    alert('Please fill in all the fields correctly.');
    return;
  }

  alert(`Booking Confirmed!\nDestination: ${destination}\nDeparture: ${departure}\nReturn: ${returnDate}\nPassengers: ${passengers}\nTotal Price: $${totalPrice}`);
});
