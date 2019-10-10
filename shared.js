console.log("javascript working");
let backdrop = document.querySelector(".backdrop");
console.dir(backdrop);
//get the modal from html
let modal = document.querySelector(".modal");
var modalAction = document.querySelector(".modal__action--negative");
//manipulate the style when button clicks not on page load
let selectPlanButtons = document.querySelectorAll(".pagePlan button");
console.dir(selectPlanButtons);
// togglebuttons
let toggleButton = document.querySelector(".toggle-button");
let mobileNav = document.querySelector(".mobile-nav");

//loop thru butons
for (var i = 0; i < selectPlanButtons.length; i++) {
  //listen for click and execute the code when event occurs
  selectPlanButtons[i].addEventListener("click", function() {
    //show as block element and not diplay:none in the css, when clicked
    // modal.style.display = "block";
    // backdrop.style.display = "block";
    // using classlist to access open class to change to block
    modal.classList.add("open");
    backdrop.classList.add("open");
  });
}
//make it so the modal and backdrop return to none
//wrap in if statement so it only runs on home page
if (modalAction) {
  modalAction.addEventListener("click", closeModal);
}

backdrop.addEventListener("click", function() {
  mobileNav.style.display = "none";
  closeModal();
});
//added function so clicking on button or backdrop closes modal
function closeModal() {
  //if statement so open and close only when +modal
  if (modal) {
    modal.classList.remove("open");
  }
  backdrop.classList.remove("open");
  //   if (backdrop) {
  //     backdrop.classList.remove("open");
  //   }
}

toggleButton.addEventListener("click", function() {
  mobileNav.classList.add("open");
  backdrop.classList.add("open");
});
