document.addEventListener('DOMContentLoaded', function () {
    const message = document.getElementsByClassName('message');

    if (message.length > 0) {
        setTimeout(function () {
            message[0].style.display = 'none';
        }, 4000);
    }
});

document.getElementById("scooterParkButton").addEventListener("click", function () {
    submitForm("scooterParkingForm");
});

document.getElementById("carParkButton").addEventListener("click", function () {
    submitForm("carParkingForm");
});

function submitForm(formId) {
    const form = document.getElementById(formId);
    const formData = new FormData(form);
    fetch("/park", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(html => {
        document.open();
        document.write(html);
        document.close();
    })
    .catch(error => console.error("Error:", error));
}