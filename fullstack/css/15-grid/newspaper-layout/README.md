# Design a Newspaper Layout

Build an app that is functionally similar to this [example project](https://www.freecodecamp.org/learn/responsive-web-design-v9/lab-newspaper-layout/design-a-newspaper-layout). Try not to copy the example project, give it your **own personal style**.

In this lab, you will design a newspaper layout using CSS Grid, including concepts like grid rows and grid columns.

**Objective**: Fulfill the user stories below and get all the tests to pass to complete the lab.

## User Stories

1. [x] Your page should contain a main element with the class newspaper-layout.
2. [x] The .newspaper-layout should include a header with the class title containing an h1 to display the newspaper's name.
3. [x] The .newspaper-layout should include an article with the class feature-article for the main news article.
4. [x] The .feature-article should include an h2 element for the article title followed by a p element for the article content.
5. [x] You should add three more article elements for smaller articles, with classes small-article1, small-article2, and small-article3.
6. [x] Each of the smaller articles should include an h3 element for the article title followed by a p element for the article content.
7. [x] The .newspaper-layout should include an article element with the class secondary-article for an additional news section.
8. [x] The .secondary-article should include an h2 element for the article title followed by a p element for the article content.
9. [x] The .newspaper-layout should include a figure with the class cover-image to display an image that represents the newspaper's content.
10. [x] The elements with the classes title, feature-article, secondary-article, cover-image, small-article1, small-article2, and small-article3 should have a grid-area property set to the same class name.
11. [x] Your .newspaper-layout should use CSS Grid with a grid-template-areas property to define the arrangement of sections:

    [x] - The .title should span across the top row.

    [x] - The .feature-article should span two columns in the second row, with the .cover-image in the third column.

    [x] - The .secondary-article should span two columns in the third row, with the .cover-image in the third column.

    [x] - The three small articles should appear in the fourth row.

12. [x] The .newspaper-layout should have a grid-template-columns property that divides the space into three equal columns.
13. [x] You should set the .newspaper-layout's grid-template-rows property to auto for the first row and divide the remaining space into equal parts for the other rows.
14. [x] You should add a gap between grid items.
15. [x] Ensure that the image inside .cover-image fits within the designated space by setting its max-width to 100%.

**Note**: Be sure to link your stylesheet in your HTML and apply your CSS.
