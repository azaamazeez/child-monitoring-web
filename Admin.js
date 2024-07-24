document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const email = document.getElementById('email').value;
            console.log("Email provided:", email);

            // استبدل هذا بعنوان URL الخاص بالخادم الذي يدير الاتصال بالجهاز
            const serverUrl = 'https://your-server.com/contact-device'; 

            fetch(serverUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: email })
            })
            .then(response => response.json())
            .then(data => {
                console.log("Server response:", data);
                alert('تم إرسال الإشعار إلى الجهاز.');
            })
            .catch(error => {
                console.error("Error:", error);
                alert('حدث خطأ أثناء إرسال الإشعار.');
            });
        });
    }
});
