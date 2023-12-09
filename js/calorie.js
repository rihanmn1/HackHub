// function calculateCalories() {
//     var foodSelect = document.getElementById("food-select");
//     var selectedOption = foodSelect.options[foodSelect.selectedIndex];
//     var caloriesPerServing = parseFloat(selectedOption.value);
    
//     var servings = parseFloat(document.getElementById("servings").value);
  
//     if (!isNaN(caloriesPerServing) && !isNaN(servings) && servings > 0) {
//       var totalCalories = servings * caloriesPerServing;
//       document.getElementById("result").innerHTML = "Total Calories: " + totalCalories.toFixed(2);
//     } else {
//       document.getElementById("result").innerHTML = "Please select a valid food and enter valid numbers of servings.";
//     }
//   }

// Updated JavaScript to handle multiple items with quantity

function increaseQuantity(button) {
  const listItem = button.closest('.food-item');
  const quantityElement = listItem.querySelector('.quantity');
  const currentQuantity = parseInt(quantityElement.textContent, 10);
  quantityElement.textContent = currentQuantity + 1;
}

function decreaseQuantity(button) {
  const listItem = button.closest('.food-item');
  const quantityElement = listItem.querySelector('.quantity');
  const currentQuantity = parseInt(quantityElement.textContent, 10);
  quantityElement.textContent = currentQuantity - 1;
}

function calculateCalories() {
  const foodItems = document.querySelectorAll('.food-item');
  let totalCalories = 0;

  foodItems.forEach(item => {
    const calories = parseInt(item.getAttribute('data-calories'), 10);
    const quantity = parseInt(item.querySelector('.quantity').textContent, 10);
    totalCalories += calories * quantity;
  });

  document.getElementById("result").innerHTML = "Total Calories: " + totalCalories;
}
