# Design a Pricing Plans Layout Page

Build an app that is functionally similar to this [example project](https://www.freecodecamp.org/learn/responsive-web-design-v9/lab-pricing-plans-layout/design-a-pricing-plans-layout-page). Try not to copy the example project, give it your **own personal style**.

**Objective**: Fulfill the user stories below and get all the tests to pass to complete the lab.

## User Stories

1. [x] Your page should have an h1 element with the text Pricing Plans.
2. [x] Your page should have a div element with the class pricing-container below the h1 element.

    [x] - The .pricing-container selector should have a display property with the value of flex and a flex-wrap property with the value of wrap.

3. [x] Within the .pricing-container element, you should have three div elements with the class pricing-card to represent the pricing plans.

    [x] - One of the .pricing-card elements should have the class basic-plan in addition to the pricing-card class.

    [x] - One of the .pricing-card elements should have the class pro-plan in addition to the pricing-card class.

    [x] - One of the .pricing-card elements should have the class premium-plan in addition to the pricing-card class.

4. [x] Your .basic-plan element should have an h2 element with the text Basic Plan.
5. [x] Your .basic-plan element should have a p element with the text $9/month.
6. [x] Your .pro-plan element should have an h2 element with the text Pro Plan.
7. [x] Your .pro-plan element should have a p element with the text $19/month.
8. [x] Your .premium-plan element should have an h2 element with the text Premium Plan.
9. [x] Your .premium-plan element should have a p element with the text $29/month.
10. [x] Each of your .pricing-card elements should:

    [x] - Use Flexbox to stack its content in a column and justify the space between the children using space-between.

    [x] - Set the flex property to 0 0 200px to give it a consistent width and prevent it from growing or shrinking in the layout.

    [x] - Set the border property to 2px solid black to see how the different cards take up space.

11. [x] The .basic-plan element should appear first in the layout. You should use the order property for this.
12. [x] The .pro-plan element should appear second in the layout. You should use the order property and set its flex-grow property to 2 so it takes up more space than the other plans.
13. [x] The .premium-plan element should come last in the layout. You should use the order property for this.

**Note**: Be sure to link your stylesheet in your HTML and apply your CSS.
