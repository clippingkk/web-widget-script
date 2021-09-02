import { rootDOM } from "./common";

export function checkDarkMode() {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function watchDarkMode() {
  if (!window.matchMedia) return;

  window.matchMedia('(prefers-color-scheme: dark)')
    .addEventListener("change", addDarkModeSelector)
}

function addDarkModeSelector(e: MediaQueryListEvent) {
  if (e.matches) {
    rootDOM.classList.add('ck-dark')
  } else {
    rootDOM.classList.remove('ck-dark')
  }
}

watchDarkMode()

// only can init by once
if (checkDarkMode()) {
    rootDOM.classList.add('ck-dark')
}
