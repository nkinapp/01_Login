function togglePassword() {
  document
    .querySelectorAll(".eye")
    .forEach((eye) => eye.classList.toggle("hide"))

  if (senha.getAttribute("type") == "password") {
    senha.setAttribute("type", "text")
  } else {
    senha.setAttribute("type", "password")
  }
}
