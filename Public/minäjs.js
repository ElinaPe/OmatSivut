const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce))");
const details = document.querySelector(".object-and-details > details");

if (mediaQuery.matches) {
  details.removeAttribute("open");
}