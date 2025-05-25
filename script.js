function toggleContent(id) {
    const content = document.getElementById(id);
    // Toggle visibility of the content
    if (content.style.display === "none" || content.style.display === "") {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  }
  