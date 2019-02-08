function regexChecker() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    let firstNameRegex = /[A-Z]\w+\B/;
    let lastNameRegex = /[A-Z]\w+\B/;
    if (firstName.match(firstNameRegex) && lastName.match(lastNameRegex)) {
        alert("Yay! Your inputs were all correct!");
        console.log(true);
    }
    else {
        alert("Oh no! Thats an invalid format!");
        console.log(false);
    }
}