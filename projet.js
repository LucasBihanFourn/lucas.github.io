document.getElementById("voirPlus").addEventListener("click", function() {
    let hiddenProjects = document.querySelectorAll(".project.hidden");
    hiddenProjects.forEach(project => project.classList.remove("hidden"));
    this.style.display = "none"; // Cache le bouton après l'affichage
});