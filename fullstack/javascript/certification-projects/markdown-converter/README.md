# Build a Markdown to HTML Converter

Build an app that is functionally similar to this example project. Try not to copy the example project, give it your own personal style.

Markdown is a markup language used to add formatting elements to plain-text documents. For this lab, all the HTML and CSS has been provided to you. You will use JavaScript to complete the Markdown to HTML Converter app so that it can handle the conversion of basic Markdown constructs into HTML elements.

> **Note:** The final result won't be a comprehensive Markdown to HTML converter, but you can add extra functionalities to it if you would like.

## Objective

Fulfill the user stories below and get all the tests to pass to complete the lab.

## User Stories

- [x] You should have a function named `convertMarkdown` that takes no parameters.
- [x] The `convertMarkdown` function should use regular expressions to convert the markdown input from `#markdown-input` into HTML and should return a string containing the HTML code.
- [x] The `convertMarkdown` function should convert headings of level one, two, and three into the corresponding `h1`, `h2`, and `h3` elements. A heading in markdown is indicated by as many `#` character as its level followed by a space and the heading text. `#` characters should be placed at the beginning of the line: there can be spaces but no other characters before it.
- [x] The `convertMarkdown` function should convert bold text into `strong` elements. Bold text in markdown is indicated either by a pair of double asterisks or a pair of double underscores enclosing the text.
- [x] The `convertMarkdown` function should convert italic text into `em` elements. Italic text in markdown is indicated either by a pair of asterisks or a pair of underscores enclosing the text.
- [x] The `convertMarkdown` function should convert images into `img` elements. An image in markdown is indicated by `![alt-text](image-source)`, where `alt-text` is the value of the `alt` attribute and `image-source` is the value of the `src` attribute.
- [x] The `convertMarkdown` function should convert links into anchor elements. A link in markdown is indicated by `[link text](URL)`, where `link text` is the text to enclosed within the anchor tags and `URL` is the value of `href` attribute.
- [x] The `convertMarkdown` function should convert quotes into `blockquote` elements. A quote in markdown is indicated by a `>` followed by a space and the quote text. The `>` character should be placed at
