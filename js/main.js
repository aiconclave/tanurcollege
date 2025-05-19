document.addEventListener('DOMContentLoaded', function() {
    // Sliding menu functionality
    const openMenu = document.getElementById('openMenu');
    const closeMenu = document.getElementById('closeMenu');
    const sideMenu = document.getElementById('sideMenu');

    if (openMenu && closeMenu && sideMenu) {
        openMenu.onclick = function() {
            sideMenu.style.width = '270px';
        };
        closeMenu.onclick = function() {
            sideMenu.style.width = '0';
        };
        // Optional: close menu when clicking outside
        window.addEventListener('click', function(event) {
            if (event.target === sideMenu) {
                sideMenu.style.width = '0';
            }
        });
    }

    // Registration modal functionality
    const registrationButton = document.getElementById('registration-button');
    if (registrationButton) {
        registrationButton.addEventListener('click', function() {
            document.getElementById('registrationModal').style.display = 'flex';
        });
    }

    const closeModal = document.getElementById('closeModal');
    if (closeModal) {
        closeModal.onclick = function() {
            document.getElementById('registrationModal').style.display = 'none';
        };
    }

    window.onclick = function(event) {
        const modal = document.getElementById('registrationModal');
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };

    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        registrationForm.onsubmit = function(e) {
            e.preventDefault();
            alert('Thank you for registering!');
            document.getElementById('registrationModal').style.display = 'none';
        };
    }
});
