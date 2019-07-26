var acc = document.getElementsByClassName('fees__payments-btn');
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {
        // Toggle between adding and removing active class, to highlight the panel that controls the active class
        this.classList.toggle('active');

        // Toggle between hiding and showing the active panel
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    });
}
