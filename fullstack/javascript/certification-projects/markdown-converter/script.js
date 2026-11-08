const markdownInput = document.querySelector("#markdown-input")
const htmlOutput = document.querySelector("#html-output")
const htmlPreview = document.querySelector("#preview")
const lightBtn = document.querySelector(".light-button")
const darkBtn = document.querySelector(".dark-button")

;(function () {
  const theme = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
  document.documentElement.setAttribute("data-theme", theme)
})()

/**
 * Funtion that checks saved theme in localStorage and prefers-color-scheme by user "light"/"dark".
 * @returns {String} initial theme by user: "light"/"dark".
 */
const getInitialTheme = () => {
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme) return savedTheme
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

// Apply theme on load
const currentTheme = getInitialTheme()
document.documentElement.setAttribute("data-theme", currentTheme)

/**
 * Function that set localStorage theme item and document theme.
 * @param {String} theme theme to apply "light"/"dark".
 */
const setTheme = (theme) => {
  document.documentElement.setAttribute("data-theme", theme)
  localStorage.setItem("theme", theme)
}

lightBtn?.addEventListener("click", () => setTheme("light"))
darkBtn?.addEventListener("click", () => setTheme("dark"))

markdownInput?.addEventListener("input", () => {
  const htmlCode = convertMarkdown()
  htmlOutput.replaceChildren()
  htmlPreview.replaceChildren()
  htmlPreview.innerHTML = htmlCode
  htmlOutput.textContent = htmlPreview.innerHTML
})

/**
 * Funtion that takes no parameters. It should use regular expressions to convert the markdown input from `#markdown-input` into HTML and should return a string containing the HTML code.
 * @returns {String} the HTML code from input markdown.
 */
const convertMarkdown = () => {
  const regEx = new RegExp(/\n/, "g")
  if (markdownInput.value === "") return ""

  const markdownArr = markdownInput.value.split(regEx)
  return markdownArr
    .reduce((codeArr, element) => {
      //* # Heading 1
      if (/^#\s.+/.test(element)) {
        //* **bold text** | __bold text__
        if (/\*\*([^\*]+)\*\*/.test(element) || /\_\_([^\_]+)\_\_/.test(element)) {
          const elementWithAsterisc = String(element).replace(/\*\*([^\*]+)\*\*/g, (_, content) => {
            return `<strong>${content}</strong>`
          })
          const elementReplaced = elementWithAsterisc.replace(/\_\_([^\_]+)\_\_/g, (_, content) => {
            return `<strong>${content}</strong>`
          })
          const [mark, ...text] = elementReplaced.split(/\s+/)
          const h1 = `<h1>${text.join(" ")}</h1>`
          codeArr.push(h1)
          return codeArr
        } else {
          const [mark, ...text] = element.split(/\s+/)
          const h1 = `<h1>${text.join(" ")}</h1>`
          codeArr.push(h1)
          return codeArr
        }
      }
      //* ## Heading 2
      if (/^##\s.+/.test(element)) {
        const [mark, ...text] = element.split(/\s+/)
        const h2 = `<h2>${text.join(" ")}</h2>`
        codeArr.push(h2)
        return codeArr
      }
      //* ### Heading 3
      if (/^###\s.+/.test(element)) {
        const [mark, ...text] = element.split(/\s+/)
        const h3 = `<h3>${text.join(" ")}</h3>`
        codeArr.push(h3)
        return codeArr
      }
      //* **bold text** | __bold text__
      if (/^\*\*([^\*]+)\*\*$/.test(element) || /^\_\_([^\_]+)\_\_$/.test(element)) {
        const text = element.slice(2, -2)
        const strong = `<strong>${text}</strong>`
        codeArr.push(strong)
        return codeArr
      }
      //* **italic text** | __italic text__
      if (/^\*([^\*]+)\*$/.test(element) || /^\_([^\_]+)\_$/.test(element)) {
        const text = element.slice(1, -1)
        const italic = `<em>${text}</em>`
        codeArr.push(italic)
        return codeArr
      }
      //* ![alt-text](image-source)
      if (/^\!\[([^\]]+)\]\(([^\)]+)\)$/.test(element)) {
        const alt = element.match(/\[(.+)\]/)
        const src = element.match(/\((.+)\)/)
        const img = `<img alt="${alt[1]}" src="${src[1]}">`
        codeArr.push(img)
        return codeArr
      }
      //* [Link text](URL)
      if (/^\[([^\]]+)\]\(([^\)]+)\)$/.test(element)) {
        const linkText = element.match(/\[(.+)\]/)
        const url = element.match(/\((.+)\)/)
        const anchor = `<a href="${url[1]}">${linkText[1]}</a>`
        codeArr.push(anchor)
        return codeArr
      }
      //* > quote
      if (/^\>\s.+/.test(element)) {
        //* **bold text** | __bold text__
        const elementArr = []
        //**Strong text *Em text***
        if (/\*\*([^*]+\*[^*]+\*)\*\*/.test(element)) {
          element = String(element).replace(/\*\*([^*]+\*[^*]+\*)\*\*/g, (_, content) => {
            return `<strong>${content}</strong>`
          })
        }
        if (/\*([^\*]+)\*/.test(element)) {
          element = element.replace(/\*([^\*]+)\*/g, (_, content) => {
            return `<em>${content}</em>`
          })
        }
        if (/\_([^\_]+)\_/.test(element)) {
          element = element.replace(/\_([^\_]+)\_/g, (_, content) => {
            return `<em>${content}</em>`
          })
        }
        const [mark, ...text] = element.split(/\s+/)
        const blockquote = `<blockquote>${text.join(" ")}</blockquote>`
        codeArr.push(blockquote)
        return codeArr
      }
      //* text without format
      const para = `${element}`
      codeArr.push(para)
      return codeArr
    }, [])
    .join("")
}

/**
 * Funtion that takes no parameters. It should use regular expressions to convert the markdown input from `#markdown-input` into HTML and should return a string containing the HTML code.
 * @returns {String} the HTML code from input markdown.
 */
const convertMarkdownPro = () => {
  const regEx = new RegExp(/\n/, "g")
  if (currentContent.length === 0) return currentContent

  const markdownArr = currentContent.split(regEx)
  return markdownArr.reduce((fragment, element) => {
    //* # Heading 1
    if (/^#\s.+/.test(element)) {
      const [mark, ...text] = element.split(/\s+/)
      const h1 = document.createElement("h1")
      h1.textContent = text.join(" ")
      fragment.appendChild(h1)
      return fragment
    }
    //* ## Heading 2
    if (/^##\s.+/.test(element)) {
      const [mark, ...text] = element.split(/\s+/)
      const h2 = document.createElement("h2")
      h2.textContent = text.join(" ")
      fragment.appendChild(h2)
      return fragment
    }
    //* ### Heading 3
    if (/^###\s.+/.test(element)) {
      const [mark, ...text] = element.split(/\s+/)
      const h3 = document.createElement("h3")
      h3.textContent = text.join(" ")
      fragment.appendChild(h3)
      return fragment
    }
    //* **bold text** | __bold text__
    if (/^\*\*([^\*]+)\*\*$/.test(element) || /^\_\_([^\_]+)\_\_$/.test(element)) {
      const text = element.slice(2, -2)
      const strong = document.createElement("strong")
      strong.textContent = text
      fragment.appendChild(strong)
      return fragment
    }
    //* **italic text** | __italic text__
    if (/^\*([^\*]+)\*$/.test(element) || /^\_([^\_]+)\_$/.test(element)) {
      const text = element.slice(1, -1)
      const italic = document.createElement("em")
      italic.textContent = text
      fragment.appendChild(italic)
      return fragment
    }
    //* ![alt-text](image-source)
    if (/^\!\[([^\]]+)\]\((https?:\/\/(?:[\w-]+\.)+[\w-]{2,}(?:\/[^\s]*)?)\)$/.test(element)) {
      const alt = element.match(/\[(.+)\]/)
      const src = element.match(/\((.+)\)/)
      const img = document.createElement("img")
      img.setAttribute("src", src[1])
      img.setAttribute("alt", alt[1])
      fragment.appendChild(img)
      return fragment
    }
    //* [Link text](URL)
    if (/^\[([^\]]+)\]\((https?:\/\/(?:[\w-]+\.)+[\w-]{2,}(?:\/[^\s]*)?)\)$/.test(element)) {
      const linkText = element.match(/\[(.+)\]/)
      const url = element.match(/\((.+)\)/)
      const anchor = document.createElement("a")
      anchor.setAttribute("href", url)
      anchor.textContent = linkText[1]
      fragment.appendChild(anchor)
      return fragment
    }
    //* > quote
    if (/^\>\s.+/.test(element)) {
      const [mark, ...text] = element.split(/\s+/)
      const blockquote = document.createElement("blockquote")
      blockquote.textContent = text.join(" ")
      fragment.appendChild(blockquote)
      return fragment
    }
    //* text without format
    const para = document.createElement("p")
    para.textContent = element
    fragment.appendChild(para)
    return fragment
  }, document.createDocumentFragment())
}
