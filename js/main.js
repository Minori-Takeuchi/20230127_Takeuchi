// ハンバーガーメニュー
const menu = document.getElementById("menu");
menu.addEventListener("click", () => {
  menu.classList.toggle("open");
  const nav = document.getElementById("drawer-nav");
  nav.classList.toggle("in");
});

// modal
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const modal = document.getElementById("modal");
openBtn.addEventListener("click", () => {
  modal.style.display = "block";
});
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
modal.addEventListener("click", (event) => {
  if (event.target.closest(".modal__content-inner") === null && event.target.id !== "openBtn") {
    modal.style.display = "none";
  }
});

// scroll-top
function scrollTop(elem) {
  const scroll = document.getElementById(elem);
  scroll.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
scrollTop("button");