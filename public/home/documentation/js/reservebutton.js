function openModal() {
    document.getElementById('reservationModal').style.display = 'block';
}

// Close modal function
function closeModal() {
    document.getElementById('reservationModal').style.display = 'none';
}

// Add event listeners to the reserve buttons
const reserveButtons = document.querySelectorAll('.reserve-btn');
reserveButtons.forEach(button => {
    button.addEventListener('click', openModal);
});

// Handle form submission
document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add your form submission logic here (e.g., AJAX call)
    alert('Reservation submitted successfully!');
    closeModal();
});