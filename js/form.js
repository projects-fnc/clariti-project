// Form handling for booking page
document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('bookingForm');
    
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            const name = document.getElementById('name').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const scanType = document.getElementById('scanType').value;
            const preferredDate = document.getElementById('preferredDate').value;
            const preferredTime = document.getElementById('preferredTime').value;
            
            if (!name || !phone || !scanType || !preferredDate || !preferredTime) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Phone validation
            const phoneRegex = /^[0-9]{10}$/;
            if (!phoneRegex.test(phone)) {
                alert('Please enter a valid 10-digit phone number.');
                return;
            }
            
            // Prepare data for WhatsApp
            const message = `New Appointment Request:\n\n` +
                          `Name: ${name}\n` +
                          `Phone: ${phone}\n` +
                          `Scan Type: ${scanType}\n` +
                          `Preferred Date: ${preferredDate}\n` +
                          `Preferred Time: ${preferredTime}\n` +
                          `Email: ${document.getElementById('email').value || 'Not provided'}\n` +
                          `Notes: ${document.getElementById('message').value || 'None'}`;
            
            // Encode message for WhatsApp URL
            const encodedMessage = encodeURIComponent(message);
            const whatsappUrl = `https://wa.me/919074389847?text=${encodedMessage}`;
            
            // Open WhatsApp
            window.open(whatsappUrl, '_blank');
            
            // Show success message
            alert('Thank you! Opening WhatsApp to send your booking request. We will confirm your appointment shortly.');
            
            // Reset form
            bookingForm.reset();
        });
    }
});