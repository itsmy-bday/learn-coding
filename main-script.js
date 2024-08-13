document.addEventListener('DOMContentLoaded', function() {
  const languages = ['HTML', 'CSS', 'JavaScript'];

  const searchInput = document.getElementById('search-bar');
  const autocompleteList = document.getElementById('autocomplete-list');

  let isClicked = false; // Flag to track if the text box is clicked

  searchInput.addEventListener('input', function() {
    if (isClicked) {
      const inputText = this.value.toLowerCase();
      autocompleteList.innerHTML = '';

      const filteredLanguages = languages.filter(language =>
        language.toLowerCase().includes(inputText)
      );

      filteredLanguages.forEach(language => {
        const option = document.createElement('div');
        option.className = 'autocomplete-item'; // Add a class for styling
        option.textContent = language;
        option.addEventListener('click', function() {
          searchInput.value = language;
          autocompleteList.innerHTML = '';
        });
        autocompleteList.appendChild(option);
      });
    }
  });

  // When the text box is clicked, set the flag to true
  searchInput.addEventListener('click', function() {
    isClicked = true;
  });

  // When the user clicks outside the text box, set the flag to false and clear the list
  document.addEventListener('click', function(event) {
    if (event.target !== searchInput) {
      isClicked = false;
      autocompleteList.innerHTML = '';
    }
  });
});



function home() {
    window.location.href = ('./index.html');
}