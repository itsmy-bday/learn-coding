document.addEventListener('DOMContentLoaded', function() {
  const languages = ['HTML', 'CSS', 'JavaScript'];

  const searchInput = document.getElementById('search-bar');
  const autocompleteList = document.getElementById('autocomplete-list');

  let isClicked = false; // Flag to track if the text box is clicked

  
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