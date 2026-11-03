// The page content lives in index.html. JavaScript only adds interaction.
const menuButton = document.querySelector('.menu-button')
const navLinks = document.querySelector('#nav-links')
const menuIcon = menuButton.querySelector('svg')
const closedIcon = menuIcon.innerHTML

function setMenuOpen(open) {
  navLinks.classList.toggle('is-open', open)
  menuButton.setAttribute('aria-expanded', String(open))
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation')
  menuIcon.innerHTML = open ? '<path d="m6 6 12 12M18 6 6 18"/>' : closedIcon
}

menuButton.addEventListener('click', () => {
  setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true')
})

document.querySelectorAll('.site-header a').forEach(link => {
  link.addEventListener('click', () => setMenuOpen(false))
})

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    setMenuOpen(false)
    menuButton.focus()
  }
})

if ('IntersectionObserver' in window) {
  const navObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return
      navLinks.querySelectorAll('a').forEach(link => {
        const active = link.hash === `#${entry.target.id}`
        link.classList.toggle('active', active)
        if (active) link.setAttribute('aria-current', 'location')
        else link.removeAttribute('aria-current')
      })
    })
  }, { rootMargin: '-35% 0px -55% 0px' })
  document.querySelectorAll('main section[id]').forEach(section => navObserver.observe(section))

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return
      entry.target.classList.add('visible')
      revealObserver.unobserve(entry.target)
    })
  }, { threshold: 0.12 })
  document.documentElement.classList.add('reveal-enabled')
  document.querySelectorAll('.reveal').forEach(item => revealObserver.observe(item))
}

const copyrightYear = document.querySelector('#copyright-year')
if (copyrightYear) copyrightYear.textContent = `© ${new Date().getFullYear()}`
