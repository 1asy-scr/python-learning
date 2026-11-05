
// GANTI username dan repository sesuai akun GitHub Anda.
const SITE_CONFIG = {
  githubUsername: "1asy-scr",
  repository: "python-learning",
  branch: "main"
};

function colabUrl(notebookFile) {
  const {githubUsername, repository, branch} = SITE_CONFIG;
  return `https://colab.research.google.com/github/${githubUsername}/${repository}/blob/${branch}/notebooks/${notebookFile}`;
}
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) toggle.addEventListener("click", () => links.classList.toggle("open"));

  document.querySelectorAll("[data-notebook]").forEach(button => {
    const file = button.getAttribute("data-notebook");
    button.href = colabUrl(file);
    button.target = "_blank";
    button.rel = "noopener";
  });

  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();
});
