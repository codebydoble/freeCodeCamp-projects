# 3 - Design

Atomic Design is a methodology created by web designer Brad Frost to help you build user interfaces (UI) in a more structured and hierarchical way. It breaks down an interface into five distinct stages, similar to how chemistry breaks down matter.
The goal is to move from small, foundational elements to a full, cohesive design. This approach promotes reusability, consistency, and scalability across your projects, which are all principles we've discussed.

The five stages are:

**Atoms**: These are the fundamental, indivisible building blocks of your UI, like a single button, a label, a form input, or a font style. They can't be broken down further without losing their purpose.

**Molecules**: When you combine a few atoms, they form a molecule. For example, a search form is a molecule composed of an input field, a button, and a label. These are simple, functional components.

**Organisms**: Combining molecules and atoms creates complex organisms. A common example is a website's header, which might include a logo (an atom), a navigation menu (a molecule), and a search form (another molecule).

**Templates**: This stage involves arranging organisms into a basic page layout. Templates are abstract, static representations of a page's structure, focusing on the content's arrangement rather than the final content itself. They are the wireframes of your design system.

**Pages**: The final stage. Pages are specific instances of templates with real, representative content. This is where you test the design's effectiveness and confirm if the system works as intended.

- UI Fundamentals.
- User-Centered Design.
- Common Design Tools.

## What Are Common Design Terms to Help You Communicate with Designers?

**Layout** is how the visual elements are arranged on a page or screen to communicate a message. These elements may include text, images, and white space. The layout is like the blueprint of a design. Designers must consider the placement, size, and hierarchy of each element.

**Alignment** is how the elements are placed in relation to one another. Using alignment correctly is helpful for making the design look clean and organized. Designers create visual order by aligning elements along imaginary lines, edges, or a central point.

**Composition** is the art of arranging elements to create a harmonious design. It determines how elements like images, text, and shapes relate to each other and contribute to the design in an artistic way. While layout mostly focuses on the placement of the elements, composition also considers the artistic impact that this placement will have in the overall design.

**Balance** is how the visual weight is distributed within a composition. Designers aim to create an equilibrium through symmetrical or asymmetrical arrangements. A balanced design feels harmonious.

**Hierarchy** is another important concept that you should know. Hierarchy establishes the order of importance of the elements in a design. It's about making sure the most important information is noticed first. You can implement a visual hierarchy with size, color, contrast, alignment, white space, and even typography.

**Contrast** is helpful for guiding user attention to what you want to emphasize. You can do this through variations in color, size, shape, texture, or any other visual characteristic. Strong contrast is also helpful for improving readability.

**White Space**, also known as "negative space", is the empty space in a design. It's the area surrounding the elements. You might be surprised to know that white space is not necessarily white. Actually, it can be space in any color or texture. Its purpose is to improve the readability and enhance the visual hierarchy of a design.

The **user interface**, also known as **UI**, is how humans interact with computers. A user interface includes the visual and interactive elements that users can see on their screens, like icons, images, text, menus, links, and buttons.

The **user experience**, also known as **UX**, is about how users feel when using a product or service. An application with a well-designed user experience is intuitive, easy to use, efficient, accessible, and enjoyable. The user interface plays a key role in making the user experience as easy and enjoyable as possible, so they are very closely related.

The **call to action**, also known as **CTAs** are used to encourage users to take a specific action like signing up for a newsletter or making a purchase.

**Law of proximity**: this law states that elements that are close together are perceived as being related, while elements that are far apart are perceived as being unrelated.

**Pixels** per inch, or **PPI**, is the number of pixels in one inch of an image. The higher the PPI, the better the image quality.

The progressive enhancement approach lives by these core principles:

- All core content and basic functionality should be accessible on all browsers
- All advanced layouts should be provided through external CSS stylesheets
- All advanced functionality should be provided through external JavaScript files
- A user's browser preferences should be respected

## What Is User-Centered Design?

**User-centered** design is a web development approach that prioritizes the end user, from their needs to their preferences and limitations. The goal of user-centered design is to craft a web page that is intuitive, efficient to use, and pleasing for your users to interact with.

**User research** is the systematic study of the people who use your product. The goal is to measure user needs, behaviors, and pain points.

**Net Promoter Score**, or **NPS**. The NPS measures how likely your users are to recommend your product to a friend. NPS is measured through a survey offered at key milestones along the user's journey, such as after 7 days, 30 days, and 90 days. NPS is measured on a scale of 0 to 10, with 9 and 10 indicating an active promoter of your site.

Another research vector is an **exit interview**. This is a survey you show to your users when they cancel a subscription or delete an account. Data from this survey can give you insight into the factors causing user churn, so you can address them.

**User testing**, on the other hand, refers to the practice of capturing data from users as they interface with your application.

These requirements may be **functional**, meaning they dictate how your application should work, or **non-functional**, meaning they define how your application should behave.

## What Are Best Practices for Designing a Dark Mode Feature?

**Dark mode** is a special feature on web applications where you can change the default light color scheme to a dark color scheme.

## Breadcrumbs

The use of **breadcrumbs** is helpful because it can help users understand where they are in the site's hierarchy and how to navigate back to the previous pages. This is especially useful when a user has come from a search result or an external link and needs to understand the context of the page they are on. **Purpouse**: navigation aid.

## What Are Best Practices for Designing Infinite Scrolls?

**Inifite scroll**: A design pattern that loads more content as the user scrolls down the page.

- The first consideration is to provide a "Load More" button that loads the next set of results when the user clicks on it. This is a good way to give the user control over when they want to see more content.

- Another consideration would be to add a "Back" button. This gives users the ability to go back to the previous page without having to scroll all the way back up. This creates a better user experience and gives them more control over their browsing experience.

- Sometimes you will see designs with a "Back to the top" button which leads users back to the top of the page of results. Another consideration is to provide a loading indicator. Users should have a clear indication that more content is being loaded; otherwise, they might think that the page is broken.

One of the last considerations would be to keep the footer accessible to the user. If the footer contains important information, then it should be accessible to the user at all times.

## What Are Best Practices for Designing Modal Dialogs?

What is a **modal**? It's the type of pop-up that a website might show you on top of their content.

## What Are Best Practices for Progress Indication on Forms, Registration, and Setup?

**Progress indication** is a way to show users how far they are in a process.

## What Are Best Practices for Designing Shopping Carts?

- The first design consideration is making sure the shopping cart is visible to users at all times. Most shopping cart designs will have the cart displayed in the upper right hand corner of the page. Users should see the number of items in their cart displayed next to the cart icon, and be able to click on the cart to see more details about the items they are purchasing.

- Another consideration is providing a clear way for users to update the quantity of items in their cart. This can be done by providing a quantity input field next to each item in the cart. Users can easily update the quantity of an item by changing the number in the input field.

- You should also provide a "**Remove**" button next to each item in the cart. This allows users to easily remove items from their cart. You don't want to make it difficult for users to remove items from their cart, as this can lead to frustration and abandoned carts.

- Another consideration is the shopping cart icon itself. The icon should be something easily recognizable for all users. A common icon is a shopping cart with a handle and wheels. Other icons might be a shopping bag or a basket. But you don't want to choose an icon that is too abstract or difficult to understand.

- When the user wants to review the total in their cart, they should be able to easily find the total cost of all items in the cart. This should be displayed prominently on the page, so users don't have to search for it.

- Finally, you should provide a clear call-to-action button for users to proceed to checkout. This button should be prominently displayed on the page, so users don't have to search for it.

## What Is Progressive Disclosure?

A **progressive disclosure** is a design pattern used to only show users relevant content based on their current activity and hide the rest. This is done to reduce cognitive load and make the user experience more intuitive.

- The first consideration is to keep all important information visible at all times. Users should not have to struggle to find key information because it is hidden by extra advanced features.

- Another consideration is to provide a single access point for users to access additional features or information. This could be a button or link that is always visible on the page.

## What Is Deferred and Lazy Registration?

**Lazy registration** is a UI design pattern that allows users to browse and interact with your application without having to register. A good example of this would be an e-commerce site. Users should be able to browse through the products and add a few items to their cart. Then, if they are interested in purchasing, they will need to register.

The reason is that users need to see the value your site offers before they are willing to provide their information and register.

## What Are Design Briefs and How Do Developers Work with Them?

A **design brief** is a document that outlines the objectives, goals, and requirements of a project. It is a roadmap that guides the design process and ensures that the final product meets the needs of the client.

- Overview.
- Objectives and goals.
- Target audience.
- Information about competition or opponent.
- Project scope.
- Timescale and budget.

## What Are Some Common Tools Developers Should Know About That Are Used by Designers in the Industry?

**Figma** is one of the most common and essential design tools that developers should know. This cloud-based tool specializes in User Interface and User Experience (UI/UX) design. It enables design and development teams to collaborate from anywhere, offering built-in features such as:

- Vector-based design
- Automatic layout
- Commenting and feedback system
- Version history
- Real-time collaboration
- Design systems, and more

**Sketch** is another essential design tool that developers should be familiar with. Like Figma, it is vector-based and primarily used for UI/UX design.

**Adobe XD** is another vector-based design and prototyping tool for UI/UX design, known for its seamless integration with other Adobe apps like Photoshop, Illustrator, and After Effects.

Another design tool worth mentioning is **Canva**. You can use Canva to create a wide range of visual content, including posters, cover photos, presentations, short videos, and more. Its user-friendly and simple design makes it ideal for beginners.

Other popular design tools developers should know are Framer, InVision, Adobe Photoshop, Adobe Illustrator, and Miro.

# 4 - Absolute and relative units

**Absolute** length units are of fixed length and are not relative to anything else.

**Relative** means that the length is relative to something else, like the size of the screen or the size of the parent element.

**Pixel**: An absolute fixed-size unit of measurement in CSS, providing precise control over dimensions.

**Percentages** in CSS are relative units that allow you to define sizes, dimensions, and other properties as a proportion of their parent element.

**em** units are relative to the font size of the element.

**rem** units is relative to the font size of the root element, which is the html element.

**vh** stands for "viewport height," and 1vh is equal to 1% of the viewport's height.

**vw** stands for "viewport width," and 1vw is equal to 1% of the viewport's width.

**Note**

- Sometimes you might use pixels for margins, padding, and borders.
- Remember, percentages are always relative to something. For horizontal properties like width, they're relative to the parent's width. For vertical properties like height, they're usually relative to the parent's height (if specified).

Other types of absolute units include the following:

- The in (inches) unit, which is equal to 96px
- The pc (picas) unit, which is equal to 1/6th of an inch
- The pt (points) unit, which is equal to 1/72th of an inch
- The cm (centimeters) unit, which is equal to 25.2/64 of an inch
- The mm (millimeters) unit, which is equal to 1/10th of a centimeter
- The q (quarter-millimeters) unit, which is equal to 1/40th of a centimeter

# 5 - Pseudo Classes and Elements

User Action Pseudo-classes
Pseudo-classes Definition: These are special CSS keywords that allow you to select an element based on its specific state or position.
User Action Pseudo-classes: These are special keywords that allow you to change the appearance of elements based on user interactions, improving the overall user experience.
:active Pseudo-class: This pseudo-class lets you select the active state of an element, like clicking on a button.
:hover Pseudo-class: This pseudo-class defines the hover state of an element.
:focus Pseudo-class: This pseudo-class applies styles when an element gains focus, typically through keyboard navigation or when a user clicks into a form input.
:focus-within Pseudo-class: This pseudo-class is used to apply styles to an element when it or any of its descendants have focus.
Input Pseudo-classes
Input Pseudo-classes: These pseudo-classes are used to target HTML input elements based on the state they are in before and after user interaction.
:enabled Pseudo-class: This pseudo-class is used to target form buttons or other elements that are currently enabled.
:disabled Pseudo-class: This pseudo-class lets you style an interactive element in disabled mode.
:checked Pseudo-class: This pseudo-class is used to indicate to the user that it is checked.
:valid Pseudo-class: This pseudo-class targets the input fields that meet the validation criteria.
:invalid Pseudo-class: This pseudo-class targets the input fields that do not meet the validation criteria.
:in-range and :out-of-range Pseudo-classes: These pseudo-classes apply styles to elements based on whether their values are within or outside specified range constraints.
:required Pseudo-class: This pseudo-class targets input elements that have the required attribute. It signals to the user that they must fill out the field to submit the form.
:optional Pseudo-class: This pseudo-class applies styles input elements that are not required and can be left empty.
:autofill Pseudo-class: This pseudo-class applies styles to input fields that the browser automatically fills with saved data.
Location Pseudo-classes
Location Pseudo-classes: These pseudo-classes are used for styling links and elements that are targeted within the current document.
:any-link Pseudo-class: This pseudo-class is a combination of the :link and :visited pseudo-classes. So, it matches any anchor element with an href attribute, regardless of whether it's visited or not.
:link Pseudo-class: This pseudo-class allows you to target all unvisited links on a webpage. You can use it to style links differently before the user clicks on them.
:local-link Pseudo-class: This pseudo-class targets links that point to the same document. It can be useful when you want to differentiate internal links from external ones.
:visited Pseudo-class: This pseudo-class targets a link the user has visited.
:target Pseudo-class: This pseudo-class is used to apply styles to an element that is the target of a URL fragment.
:target-within Pseudo-class: This pseudo-class applies styles to an element when it or one of its descendants is the target of a URL fragment.
Tree-structural Pseudo-classes
Tree-structural Pseudo-classes: These pseudo-classes allow you to target and style elements based on their position within the document tree.
:root Pseudo-class: This pseudo-class is usually the root html element. It helps you target the highest level in the document so you can apply a common style to the entire document.
:empty Pseudo-class: Empty elements, that is, elements with no children other than white space, are also included in the document tree. That's why there's an :empty pseudo-class to target empty elements.
:nth-child(n) Pseudo-class: This pseudo-class allows you to select elements based on their position within a parent.
:nth-last-child(n) Pseudo-class: This pseudo-class enables you to select elements by counting from the end.
:first-child Pseudo-class: This pseudo-class selects the first element in a parent element or the document.
:last-child Pseudo-class: This pseudo-class selects the last element in a parent element or the document.
:only-child Pseudo-class: This pseudo-class selects the only element in a parent element or the document.
:first-of-type Pseudo-class: This pseudo-class selects the first occurrence of a specific element type within its parent.
:last-of-type Pseudo-class: This pseudo-class selects the last occurrence of a specific element type within its parent.
:nth-of-type(n) Pseudo-class: This pseudo-class allows you to select a specific element within its parent based on its position among siblings of the same type.
:only-of-type Pseudo-class: This pseudo-class selects an element if it's the only one of its type within its parent.
Functional Pseudo-classes
Functional Pseudo-classes: Functional pseudo-classes allow you to select elements based on more complex conditions or relationships. Unlike regular pseudo-classes which target elements based on a state (for example, :hover, :focus), functional pseudo-classes accept arguments.
:is() Pseudo-class: This pseudo-class takes a list of selectors (ex. ol, ul) and selects an element that matches one of the selectors in the list.

<p class="example">This text will change color.</p>
<p>This text will not change color.</p>
<p>This text will not change color.</p>
<p class="this-works-too">This text will change color.</p>
p:is(.example, .this-works-too) {
    color: red;
}
:where() Pseudo-class: This pseudo-class takes a list of selectors (ex. ol, ul) and selects an element that matches one of the selectors in the list. The difference between :is and :where is that the latter will have a specificity of 0.
:where(h1, h2, h3) {
    margin: 0;
    padding: 0;
}
:has() Pseudo-class: This pseudo-class is often dubbed the "parent" selector because it allows you to style elements that contain child elements specified in the selector list.
article:has(h2) {
    border: 2px solid hotpink;
}
:not() Pseudo-class: This pseudo-class is used to select elements that do not match the provided selector.
p:not(.example) {
  color: blue;
}
Pseudo-elements
::before Pseudo-element: This pseudo-element uses the content property to insert cosmetic content like icons just before the element.
::after Pseudo-element: This pseudo-element uses the content property to insert cosmetic content like icons just after the element.
::first-letter Pseudo-element: This pseudo-element targets the first letter of an element's content, allowing you to style it.
::marker Pseudo-element: This pseudo-element lets you select the marker (bullet or numbering) of list items for styling.

**Here is a list of tree-structural pseudo-classes**:

:root
:empty
:nth-child(n)
:nth-last-child(n)
:first-child
:last-child
:only-child
:nth-of-type
:first-of-type
:last-of-type
:only-of-type

**Examples of functional pseudo-classes are**:

:is()
:where()
:has()
:not()

## Pseudo-Elements

:before
::after
::first-letter
::marker pseudo-element which lets you select the marker

- li::marker

::placeholder
::spelling-error
::selection

# 6 - Colors

CSS Colors Review
Color Theory
Color Theory Definition: This is the study of how colors interact with each other and how they affect our perception. It covers color relationships, color harmony, and the psychological impact of color.
Primary Colors: These colors which are yellow, blue, and red, are the fundamental hues from which all other colors are derived.
Secondary Colors: These colors result from mixing equal amounts of two primary colors. Green, orange, and purple are examples of secondary colors.
Tertiary Colors: These colors result from combining a primary color with a neighboring secondary color. Yellow-Green, Blue-Green, and Blue-Violet are examples of tertiary colors.
Warm Colors: These colors which include reds, oranges, and yellows, evoke feelings of comfort, warmth, and coziness.
Cool Colors: These colors which include blues, green, and purples, evoke feelings of calmness, serenity, and professionalism.
Color Wheel: The color wheel is a circular diagram that shows how colors relate to each other. It's an essential tool for designers because it helps them to select color combinations.
Analogous Color Schemes: These color schemes create cohesive and soothing experiences. They have analogous colors, which are adjacent to each other in the color wheel.
Complementary Color Schemes: These color schemes create high contrast and visual impact. Their colors are located on the opposite ends of the color wheel, relative to each other.
Triadic Color Scheme: This color scheme has vibrant colors. They are made from colors that are approximately equidistant from each other. If they are connected, they form an equilateral triangle on the color wheel.
Monochromatic Color Scheme: For this color scheme, all the colors are derived from the same base color by adjusting its lightness, darkness, and saturation. This evokes a feeling of unity and harmony while still creating contrast.
Different Ways to Work with Colors in CSS
Named Colors: These colors are predefined color names recognized by browsers. Examples include blue, darkred, lightgreen.
rgb() Function: RGB stands for Red, Green, and Blue — the primary colors of light. These three colors are combined in different intensities to create a wide range of colors. the rgb() function allows you to define colors using the RGB color model.
p {
color: rgb(255, 0, 0);
}
rgba() Function: This function adds a fourth value, alpha, that controls the transparency of the color. If not provided, the alpha value defaults to 1.
div {
background-color: rgba(0, 0, 255, 0.5);
}
hsl() Function: HSL stands for Hue, Saturation, and Lightness — three key components that define a color.
p {
color: hsl(120, 100%, 50%);
}
hsla() Function: This function adds a fourth value, alpha, that controls the opacity of the color.
div {
background-color: hsla(0, 100%, 50%, 0.5);
}
Hexadecimal: A hex code (short for hexadecimal code) is a six-character string used to represent colors in the RGB color model. The "hex" refers to the base-16 numbering system, which uses digits 0 to 9 and letters A to F.
h1 {
color: #FF5733; /_ A reddish-orange color _/
}

p {
background-color: #4CAF50; /_ A shade of green _/
}
Linear and Radial Gradients
Linear Gradients: These gradients create a gradual blend between colors along a straight line. You can control the direction of this line using keywords like to top, to right, to bottom right, or angles like 45deg. You can use any valid CSS color and as many color stops as you would like.
.linear-gradient {
background: linear-gradient(45deg, red, #33FF11, rgba(100, 100, 255, 0.5));
height: 40vh;
}
Radial Gradients: These gradients create circular or elliptical gradients that radiate from a central point.
.radial-gradient {
background: radial-gradient(circle, red, blue);
height: 40vh;
}

CLAMP FUNTION
Ejemplo 1: Tipografía Fluida (El uso más común)
h1 {
font-size: clamp(1.5rem, 5vw, 2.5rem);
}

**Personal style**
h1 {
font-size: clamp(5vw, 2.5rem, 5rem);

Better
font-size: clamp(1.75rem, 4vw + 1rem, 3rem);
}

h2 {
font-size: clamp(4vw, 2rem, 4rem);
}

h3 {
font-size: clamp(3vw, 1.5rem, 3rem);
}

Ejemplo 2: Ancho de Contenedor (Layout)
.container {
width: clamp(20rem, 90vw, 70ch);
margin: 0 auto;
}

**Personal Style**
.container {
width: clamp(18rem, 90vw, 70ch);
margin: 0.5rem 1.5rem 0 clamp(2rem, 3rem, 5rem); //article with ul/ol
margin: 0.5rem auto;
}

Ejemplo 3: Espaciado (Padding)
.hero-section {
padding: clamp(2rem, 5vw, 4rem);
}

# 12 - Positioning

Working With Floats
Definition: Floats are used to remove an element from its normal flow on the page and position it either on the left or right side of its container. When this happens, the text will wrap around that floated content.
float: left;
float: right;
Clearing Floats: The clear property is used to determine if an element needs to be moved below the floated content. When you have multiple floated elements stacked next to each other, there could be issues with overlap and collapsing in the layouts. So a clearfix hack was created to fix this issue.
.clearfix::after {
content: "";
display: block;
clear: both;
}
Static, Relative and Absolute Positioning
Static Positioning: This is the normal flow for the document. Elements are positioned from top to bottom and left to right one after another.
Relative Positioning: This allows you to use the top, left, right and bottom properties to position the element within the normal document flow. You can also use relative positioning to make elements overlap with other elements on the page.
.relative {
position: relative;
top: 30px;
left: 30px;
}
Absolute Positioning: This allows you to take an element out of the normal document flow, making it behave independently from other elements.
.positioned {
position: absolute;
top: 30px;
left: 30px;
background-color: coral;
}
Fixed and Sticky Positioning
Fixed Positioning: When an element is positioned with position: fixed, it is removed from the normal document flow and placed relative to the viewport, meaning it stays in the same position even when the user scrolls. This is often used for elements like headers or navigation bars that need to remain visible at all times.
.navbar {
position: fixed;
top: 0;
width: 100%;
}
Sticky Positioning: This type of positioning will act as a relative positioned element as you scroll down the page. If you specify a top, left, right or bottom property, then the element will stop acting like a relatively positioned element and start behaving like a fixed position element.
.positioned {
position: sticky;
top: 30px;
left: 30px;
}
Working With the z-index Property
Definition: The z-index property in CSS is used to control the vertical stacking order of positioned elements that overlap on the page.
.container {
position: relative;
width: 300px;
height: 300px;
border: 1px solid black;
}

.box1 {
position: absolute;
z-index: 1;
background: lightcoral;
top: 20px;
left: 20px;
width: 100px;
height: 100px;
}

**GENERAL**

1. Cómo Agregar los Protocolos (El Código)
   Ambos protocolos viven en el <head> de tu página. Open Graph (OG) es la base que usan Facebook, LinkedIn, Pinterest y WhatsApp. Twitter Cards usa las etiquetas de OG como fallback, pero te permite un control más específico para la plataforma X (Twitter).

La mejor práctica es implementar OG primero y luego añadir las etiquetas específicas de Twitter.

📜 Ejemplo Completo para tu <head>
Aquí tienes un ejemplo práctico y listo para usar que combina ambos.

HTML

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>El Título de tu Página Web</title>
  
  <meta name="description" content="Esta es la descripción normal de tu página para Google.">

  <meta property="og:title" content="Un Título Atractivo para Redes Sociales">
  
  <meta property="og:description" content="Una descripción concisa y llamativa que invite al clic cuando se comparta.">
  
  <meta property="og:url" content="https://www.tu-sitio-web.com/pagina-actual">
  
  <meta property="og:type" content="website">
  
  <meta property="og:image" content="https://www.tu-sitio-web.com/assets/imagen-social.jpg">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  
  <meta property="og:site_name" content="Nombre de tu Sitio Web">

  <meta name="twitter:card" content="summary_large_image">
  
  <meta name="twitter:site" content="@TuUsuarioDeTwitter">
  
  <meta name="twitter:title" content="Un Título Atractivo para Redes Sociales">
  <meta name="twitter:description" content="Una descripción concisa y llamativa que invite al clic.">
  <meta name="twitter:image" content="https://www.tu-sitio-web.com/assets/imagen-social.jpg">

</head>
Mejores Prácticas Clave:

URLs Absolutas: Siempre usa URLs completas (https://...) para og:url y og:image. Las rutas relativas (/assets/img.jpg) fallarán.

Imagen: La og:image es lo más importante. Una mala imagen (o ninguna) reducirá los clics drásticamente.

2. Cómo Validarlos Localmente (La Solución)
   Como mencioné, los rastreadores de Facebook/Twitter no pueden acceder a localhost. Tienes que exponer tu servidor local a Internet temporalmente.

La mejor herramienta para esto es ngrok.

ngrok crea un "túnel" seguro desde una URL pública (ej. https://aleatorio.ngrok.io) directamente a tu puerto local (ej. localhost:3000).

🛠️ Paso a Paso para Validar con ngrok
Inicia tu proyecto: Primero, asegúrate de que tu servidor de desarrollo esté corriendo.

Bash

npm run dev

# (Tu proyecto ahora corre en http://localhost:3000)

Instala ngrok: Si no lo tienes, puedes descargarlo desde su sitio web o usar npm:

Bash

npm install ngrok -g
Inicia ngrok: En una nueva terminal (sin cerrar la del paso 1), dile a ngrok qué puerto debe exponer.

Bash

ngrok http 3000
Obtén tu URL pública: ngrok te dará una URL en la línea "Forwarding".

Session Status online
Forwarding https://8a9b-190-23-11-5.ngrok.io -> http://localhost:3000
Tu URL pública y temporal es https://8a9b-190-23-11-5.ngrok.io.

Actualiza tu código (Temporalmente): Ve a tu <head> y asegúrate de que og:url y og:image usen esta nueva URL pública de ngrok.

<meta property="og:url" content="https://8a9b-190-23-11-5.ngrok.io">

<meta property="og:image" content="https://8a9b-190-23-11-5.ngrok.io/assets/imagen-social.jpg"> (Nota: Algunos frameworks modernos pueden manejar esto automáticamente, pero hacerlo manual es más seguro para probar).

Valida en las Herramientas Oficiales: Ahora puedes copiar esa URL de ngrok y pegarla en los validadores oficiales. Ellos sí podrán ver tu proyecto.

Facebook/WhatsApp/LinkedIn: Facebook Sharing Debugger

Twitter (X): Twitter Card Validator

LinkedIn: LinkedIn Post Inspector

Si ves algún error (como una imagen faltante), puedes corregirlo en tu código local, guardar, y volver a hacer clic en "Scrape Again" (en Facebook) o "Preview Card" (en Twitter) para ver el cambio al instante.

Método Alternativo Rápido (Sin ngrok)
Si solo quieres una vista previa visual rápida y no una validación real del rastreador, puedes usar extensiones de navegador:

Social Share Preview (Chrome/Firefox)

OpenGraph Preview (Chrome)

Estas extensiones leen tu HTML local directamente y te muestran cómo debería verse, pero no confirman si el rastreador de Facebook podrá acceder a tu imagen. Recomiendo siempre usar ngrok para una prueba real.
