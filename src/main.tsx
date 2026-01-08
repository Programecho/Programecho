import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Handle favicon based on dark mode preference
const usesDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
const favicon = document.getElementById("favicon") as HTMLLinkElement;

function switchIcon(usesDarkMode: boolean) {
  if (usesDarkMode) {
    favicon.href = "/images/programecho-dark.svg";
  } else {
    favicon.href = "/images/programecho-light.svg";
  }
}

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => switchIcon(e.matches));
switchIcon(usesDarkMode);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

