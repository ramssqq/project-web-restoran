// scripts.js

// Smooth scrolling for navigation links
/* $(document).ready(function() {
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });

    // AJAX form submission
    $('#contactForm').on('submit', function(event) {
        event.preventDefault();
        var formData = {
            name: $('#name').val(),
            email: $('#email').val(),
            message: $('#message').val()
        };
        $.ajax({
            type: 'POST',
            url: 'your-server-endpoint-url', // Replace with your server endpoint
            data: formData,
            success: function(response) {
                alert('Pesan Anda telah dikirim!');
                $('#contactForm')[0].reset();
            },
            error: function() {
                alert('Terjadi kesalahan saat mengirim pesan.');
            }
        });
    });
});
//