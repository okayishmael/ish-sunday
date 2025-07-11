//copyright year automatically update every year
const today = new Date();
const year = today.getFullYear();
const copyRightYear = document.getElementById("year");
copyRightYear.innerHTML = year;

//Accordion
// Get all elements with class="accordion"
// and loop through them

var accordion = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
