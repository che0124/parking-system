document.getElementById("scooterParkButton").addEventListener("click", function () {
    submitForm("/scooter");
});

document.getElementById("carParkButton").addEventListener("click", function () {
    submitForm("/car");
});

function submitForm(action) {
    var temp = "";
    if(action == "/scooter") {
        temp = "scooterParkingForm";
    }else if(action == "/car") {
        temp = "carParkingForm";
    }

    const form = document.getElementById(temp);
    const formData = new FormData(form);
    fetch(action, {
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