const menuIcon = document.getElementById("menuIcon");
menuIcon.addEventListener("click", () => {
    // Toggle the visibility of delete button
    const deleteButton = document.getElementById("deleteButton");
    deleteButton.classList.toggle("hidden");
});