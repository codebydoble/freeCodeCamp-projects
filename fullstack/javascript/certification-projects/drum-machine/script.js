const lightMode = document.querySelector(".button-light-mode")
const darkMode = document.querySelector(".button-dark-mode")
const display = document.getElementById("display")
const checkbox = document.getElementById("check-power")
const padBank = document.querySelector("#pad-bank")
const drumPadBtns = document.querySelectorAll(".drum-pad")
const drumPadBtnsArr = [...drumPadBtns]

const drumPad = [
  { id: "Q", src: "https://cdn.freecodecamp.org/curriculum/drum/Heater-1.mp3" },
  { id: "W", src: "https://cdn.freecodecamp.org/curriculum/drum/Heater-2.mp3" },
  { id: "E", src: "https://cdn.freecodecamp.org/curriculum/drum/Heater-3.mp3" },
  { id: "A", src: "https://cdn.freecodecamp.org/curriculum/drum/Heater-4_1.mp3" },
  { id: "S", src: "https://cdn.freecodecamp.org/curriculum/drum/Heater-6.mp3" },
  { id: "D", src: "https://cdn.freecodecamp.org/curriculum/drum/Dsc_Oh.mp3" },
  { id: "Z", src: "https://cdn.freecodecamp.org/curriculum/drum/Kick_n_Hat.mp3" },
  { id: "X", src: "https://cdn.freecodecamp.org/curriculum/drum/RP4_KICK_1.mp3" },
  { id: "C", src: "https://cdn.freecodecamp.org/curriculum/drum/Cev_H2.mp3" },
]

;(function () {
  const theme = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
  document.documentElement.setAttribute("data-theme", theme)
})()

/**
 * Function that gets current theme dark/light.
 * @returns {String} current theme.
 */
const getTheme = () => {
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme) {
    return savedTheme
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

const currentTheme = getTheme()
document.documentElement.setAttribute("data-theme", currentTheme)

lightMode?.addEventListener("click", () => {
  document.documentElement.setAttribute("data-theme", "light")
  localStorage.setItem("theme", "light")
})

darkMode?.addEventListener("click", () => {
  document.documentElement.setAttribute("data-theme", "dark")
  localStorage.setItem("theme", "dark")
})

/**
 * Funtion that plays a song by id from drumPad.
 * @param {String} id current click or key pressed id.
 */
const playPad = (id) => {
  const song = drumPad.find((song) => song.id === id)
  audio.src = song?.src
  audio.play()
}

document?.addEventListener("keydown", (e) => {
  if (!checkbox.checked) {
    return
  }
  const keyId = e.key.toUpperCase()
  const padPressed = drumPadBtnsArr.find((pad) => {
    const getLabelID = pad.getAttribute("aria-label")
    const key = getLabelID.slice(-1)
    return key === keyId
  })
  if (!padPressed) {
    return
  } else {
    const audioEl = padPressed.querySelector("audio")
    const id = audioEl.getAttribute("id")
    audioEl.play()
    display.innerText = `${id}`
    padPressed.classList.add("is-active")
  }
})

document?.addEventListener("keyup", (e) => {
  if (!checkbox.checked) {
    return
  }
  const keyId = e.key.toUpperCase()
  const padPressed = drumPadBtnsArr.find((pad) => {
    const getLabelID = pad.getAttribute("aria-label")
    const key = getLabelID.slice(-1)
    return key === keyId
  })
  if (!padPressed) {
    return
  } else {
    padPressed.classList.remove("is-active")
  }
})

drumPadBtnsArr.forEach((pad) => {
  pad?.addEventListener("click", () => {
    if (!checkbox.checked) {
      return
    }
    // Get audio element and id
    const audioEl = pad.querySelector("audio")
    const id = audioEl.getAttribute("id")
    audioEl.play()
    display.innerText = `${id}`
  })
})
