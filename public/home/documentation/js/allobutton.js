function openModal() {
    document.getElementById('allocateModal').style.display = 'block';
}

// Close modal function
function closeModal() {
    document.getElementById('allocateModal').style.display = 'none';
}

// Add event listeners to the allocate buttons
const allocateButtons = document.querySelectorAll('.allo-btn');
allocateButtons.forEach(button => {
    button.addEventListener('click', openModal);
});

// Handle form submission
document.getElementById('allocationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add your form submission logic here (e.g., AJAX call)
    alert('Allocated successfully!');
    closeModal();
});

