document.addEventListener('DOMContentLoaded', function () {
  var priceElement = document.querySelector('.store-price');
  var quantityInput = document.querySelector('.quantity-input');

  var pricePerItem = parseFloat(priceElement.textContent.replace('€', '').trim());


  document.querySelector('.quantity-minus').addEventListener('click', function () {
    updateQuantity(-1);
  });

  document.querySelector('.quantity-plus').addEventListener('click', function () {
    updateQuantity(1);
  });

  function updateQuantity(change) {
    var currentValue = parseInt(quantityInput.textContent);
    var newValue = currentValue + change;

    newValue = Math.min(Math.max(newValue, 1), 9);

    quantityInput.textContent = newValue;

    updateTotalPrice();
  }

  function updateTotalPrice() {
    var quantity = parseInt(quantityInput.textContent);
    var totalPrice = pricePerItem * quantity;
    priceElement.textContent = totalPrice.toFixed(2) + '€';
  }
});



let slideIndex = [0, 0, 0];

showSlides(0, 3000);


function showSlides(slideshowIndex, interval) {
  let i;
  let slides = document.getElementsByClassName(`slides_${slideshowIndex + 1}`);

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex[slideshowIndex]++;
  if (slideIndex[slideshowIndex] > slides.length) {
    slideIndex[slideshowIndex] = 1;
  }

  slides[slideIndex[slideshowIndex] - 1].style.display = "block";

  setTimeout(() => showSlides(slideshowIndex, interval), interval);
}


