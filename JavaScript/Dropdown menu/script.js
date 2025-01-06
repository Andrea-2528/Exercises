function toggleRenderDropdown() {
	// Every element needs to be hard coded into HTML
	// Style to own preference, just make sure that the there's a button
	// that opens the menu with a class of ".dropdown-button",
	// and a list called ".dropdown-menu" that contains ".dropdown-item" elements
	// When the user hovers over .dropdown-button, the class ".hidden" is removed from the menu
	// When the user hovers outside of the ".container", the class ".hidden" is added

	const dropdownButton = document.querySelector(".dropdown-button");
	const dropdownMenu = document.querySelector(".dropdown-menu");
	const dropdownContainer = document.querySelector(".container");

	dropdownButton.addEventListener("mouseover", () => {
		dropdownMenu.classList.remove("hidden");
	});

	dropdownContainer.addEventListener("mouseleave", () => {
		dropdownMenu.classList.add("hidden");
	});
}

toggleRenderDropdown();
