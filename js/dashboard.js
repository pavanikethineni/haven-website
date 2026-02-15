function showTab(id) {

  document.querySelectorAll(".tab-btn").forEach(btn =>
    btn.classList.remove("active")
  );

  document.querySelectorAll(".tab-content").forEach(content =>
    content.classList.remove("active")
  );

  event.target.classList.add("active");
  document.getElementById(id).classList.add("active");
}
