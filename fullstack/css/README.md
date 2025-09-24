# Design

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

# Absolute and relative units

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
