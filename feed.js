document.getElementById("feedbackForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let feedback = document.getElementById("feedback").value;
    let rating = document.getElementById("rating").value;

    document.getElementById("message").innerHTML =
        "Thank you, " + name + "!<br>" +
        "Your feedback has been submitted.<br>" +
        "Your rating: " + rating + " out of 5.";

});