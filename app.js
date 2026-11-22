const dropdown = document.getElementById("girlsDropdown");

dropdown.addEventListener("change", function() {
    if(dropdown.value !== "") {
        window.location.href= dropdown.value;
    }
} );

const favoriteButton = document.getElementById("myFavoriteButton");