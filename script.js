<script>
    function validateForm() {
        
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        if (name === "") {
            alert("Please enter your name.");
            return false;   
        }

        if (email === "") {
            alert("Please enter your email address.");
            return false;
        }

        if (message === "") {
            alert("Please enter your message");
            return false;
        }

        alert("Form submitted successfully!");
        return true;
    }
</script>

function validateForm() {

    let name = document.getElementById("name").ariaValueMax.trim();
    let email = document.getElementById("email").ariaValueMax.trim();
    let message = document.getElementById("message").ariaValueMax.trim();

    const emailPattern = /^[^\s@]+\s@]+$/;

    if (name === "") {
        alert("Please enter your name.");
        return false;
    }

    if (name.length < 2) {
        alert("Name must contain at least 2 characters.");
        return false;
    }

    if (email === "") {
        alert("Please enter your email address.");
        return false;
    }

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (message === "") {
        alert("Please enter your message.");
        return false;
    }

    if (message.length < 10) {
        alert("Message must contain at least 10 characters.");
        return false;
    }

    alert("Thank you! Your message has been submitted successfully.");
    return false;
}

