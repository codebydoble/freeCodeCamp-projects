# Build a Newspaper Article

Build an app that is functionally similar to this example project. Try not to copy the example project, give it your own personal style.

**Objective**: Fulfill the user stories below and get all the tests to pass to complete the lab.

## User Stories:

1. [x] You should set the root font-size of your HTML document to 24px.
2. [x] You should have an element with a class of newspaper that contains all your other elements.
3. [x] Your .newspaper element should have a font-size of 16px and a font of Open Sans with a fallback font of sans-serif.
4. [x] Within your .newspaper element, you should have at least seven more elements: one for the newspaper name that has a class of name, one for the date of the article with a class of date, one for the headline with a class of headline, one for the sub-headline with a class of sub-headline, one for the author with a class of author, and two paragraphs each with a class of text. All of these elements should be filled with your article information.
5. [x] Your .name element should have a font-size that is twice the root element's font-size and should use the Times New Roman font, with a fallback font of serif.
6. [x] Your .name and .author elements should use CSS to make all their characters uppercase.
7. [x] Your .headline element should have a font-size that is twice its parent element's font-size and should be bold.
8. [x] Your .sub-headline element should have a font-weight of 100, a font-size that is 1.5 times its parent element's font-size, and should be italicized.
9. [x] Your .author should use CSS to make it bold.
10. [x] Your .text elements should have a text-indent of 20px.
11. [x] Your .text elements should have a line-height that is twice their parent element's font-size.
12. [x] The first letter of your .text elements should be bold and twice the size of their parent element's font-size. Use the ::first-letter selector for this.

## Reference Article

The Digital Chronicle
October 19, 2025

The CSS Revolution: How Modern Layouts are Ditching Grids for a Fluid Future
Developers are embracing intrinsic design principles, creating websites that adapt seamlessly to any screen size without rigid breakpoints.
By Alex Rivera

For years, web developers have relied on a system of rigid breakpoints and media queries to make websites responsive. This approach, while functional, often resulted in jarring shifts in layout as a user resized their browser window. But a paradigm shift is underway, driven by a philosophy known as "intrinsic design." Instead of dictating how a layout should look at specific screen sizes, developers are now creating components that intrinsically know how to adapt, resulting in a truly fluid and elegant user experience.

At the heart of this revolution are modern CSS features like Flexbox, Grid, and powerful functions such as clamp(). These tools allow elements to grow, shrink, and wrap based on the available space, not on predefined pixel widths. A navigation bar might gracefully stack its links on a narrow screen and spread them out on a wide one, all with a few lines of declarative code. This approach not only simplifies the stylesheet but also future-proofs the design, ensuring it looks great on devices that don't even exist yet.

Flexbox, for instance, has fundamentally changed component-level design. By treating elements as flexible items within a container, it allows for effortless alignment and distribution of space along a single axis. This one-dimensional control is perfect for lining up items in a header, centering a button in a card, or ensuring that footer elements space themselves out evenly, regardless of the text length. The days of complex float-based hacks or table layouts for simple alignment tasks are now a distant memory.

While Flexbox excels at one-dimensional layouts, CSS Grid handles the more complex, two-dimensional challenges of overall page structure. It allows developers to define columns and rows, creating a sophisticated scaffold for content that was previously only achievable with cumbersome frameworks. From magazine-style articles with overlapping images to complex dashboards with multiple panels, Grid provides a native, powerful, and surprisingly readable way to manage the entire page canvas with precision.

Perhaps the most subtle yet impactful innovation is the rise of fluid typography and spacing using the clamp() function. This function acts like a smart thermostat for CSS properties, defining a minimum size, a maximum size, and a preferred, scalable value tied to the screen's width. Headlines and paragraphs now grow and shrink smoothly as the viewport changes, eliminating the need for multiple font-size declarations in media queries. This ensures text is always perfectly sized and readable on any device.

This shift toward intrinsic design is also fostering a more collaborative relationship between designers and developers. Instead of designing static mockups for a handful of screen sizes, teams are now building robust design systems based on flexible components and rules. The conversation has moved from "how should this look on an iPhone?" to "how should this component behave when it has more or less space?" This component-driven mindset leads to more consistent, maintainable, and scalable products.

The journey doesn't end here. The recent widespread adoption of container queries represents the next frontier, allowing components to respond to the dimensions of their parent container rather than the entire viewport. A single "card" component could display as a compact block in a narrow sidebar and expand into a detailed, multi-column layout when placed in a wider main content area. This level of contextual awareness solidifies the web's evolution into a truly dynamic and adaptive medium.
