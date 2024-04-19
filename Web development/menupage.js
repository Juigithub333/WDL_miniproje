 // Get all order buttons
 const orderButtons = document.querySelectorAll('.order-btn');

 // Add click event listener to each order button
 orderButtons.forEach(button => {
   button.addEventListener('click', function() {
     // Get the dish name associated with the button
     const dishName = this.parentNode.querySelector('.dish-name').textContent;
     // Display an alert with the ordered item name
     alert("You ordered: " + dishName);
   });
 });