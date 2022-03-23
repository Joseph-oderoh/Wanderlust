$('form').submit(function () {
      alert("Submitted");

    var fields = {};
    document.addEventListener("DOMContentLoaded", function (event) {
        event.preventDefault();
        fields.firstName = document.getElementById('firstName');
        fields.lastName = document.getElementById('lastName');
        fields.email = document.getElementById('email');
        fields.subject = document.getElementById('subject');
    })

    function isNotEmpty(value) {
        if (value == null || typeof value == 'undefined') return false;

        return (value.length > 0);
    }

    function isNumber(num) {
        return (num.length > 0) && !isNaN(num);
    }

    function fieldValidation(field, validationFunction) {
        if (field == null) return false;

        let isFieldValid = validationFunction = (field.value)
        if (!isfieldValid) {
            field.className = 'placeholderRed';
        } else {
            field.className = '';
        }
        return isFieldValid;
    }

    function isValid() {
        var valid = true;

        valid &= fieldValidation(fields.firstName, isNotEmpty);
        valid &= fieldValidation(fields.lastName, isNotEmpty);
        valid &= fieldValidation(fields.email, isEmail);
        valid &= fieldValidation(fields.subject, isNotEmpty);

        return valid;
    }

    class User {
        constructor(firstName, lastName, email, subject) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.subject = subject;
        }
    }

    function submit() {
        if (isValid) {
            let usr = new User(firstName.value, lastName.value, emails.value, subject.value);
            alert('${usr.firstName} thankyou.')
        } else {
            alert("There was an error")
        }
    }
});