let newRequest = new XMLHttpRequest();
newRequest.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let myObj = JSON.parse(this.responseText);
    document.getElementById("info").innerHTML = myObj.name + myObj.age;
  }
};
newRequest.open("GET", "einstein.json", true);
newRequest.send();

function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let secondObj = JSON.parse(this.responseText);
        document.getElementById("bio").innerHTML = secondObj.bio;
      }
    };
    xhttp.open("GET", "einstein.json", true);
    xhttp.send();
  }