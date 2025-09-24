# Build an Event Flyer Page

Build an app that is functionally similar to this example project. Try not to copy the example project, give it your own personal style.

**Objective**: Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories**:

1. [x] You should have a header element within the body.
2. [x] Your header element should have an image in it for your event, and an h1 in it with your event title, in that order. You can use this image if you would like: https://cdn.freecodecamp.org/curriculum/labs/event.jpg
3. [x] You should have a main element within the body.
4. [x] Your main element should have at least two section elements within it showcasing the event features.
5. [x] Your section elements each should have an h2 within them.
6. [x] Your body should have a top and bottom padding of 50px.
7. [x] Your body should have a top and bottom margin of 0, and a left and right margin that centers itself.
8. [x] Your body should have a width set relative to the width of the viewport.
9. [x] Your body should use the calc function to set its min-height property to 100% of the viewport's height minus all padding applied to the top and bottom of the body.
10. [x] You should have at least one hr within your flyer.
11. [x] You should set the width of all hr and section elements to a percent value relative to its parent.

**Note**: Be sure to link your stylesheet in your HTML and apply your CSS.

Digital Innovation Festival 2026
Date: Saturday, March 15, 2026
Time: 10:00 AM - 6:00 PM
Location: Metropolitan Convention Center, Hall A

Festival Highlights
Expert Talks: Interactive sessions with industry leaders on the latest trends in web development, artificial intelligence, and UX/UI design.

Hands-On Workshops: Participate in practical workshops on programming with Python, building prototypes with Figma, and optimizing CSS performance.

Networking Zone: Connect with other tech professionals, students, and enthusiasts to exchange ideas and expand your network.

Special Guests
Dr. Elara Vance: Pioneer in the field of AI ethics and digital accessibility.

Kenji Tanaka: Senior developer at Google, known for his work on the Chrome Web Vitals project.

Dr. Sofia Castillo: UX designer with over 15 years of experience, specializing in conversational interfaces.

Food Trucks
The Code Kitchen: Offers gourmet tacos and quesadillas with an innovative twist.

Pixel Brews: Specialty coffee and artisanal energy drinks.

Bytes & Bites: Delicious burgers and fries, perfect for recharging your energy.

### Registration

- **Header:** "Ready to Innovate?"
- **Body:** "Secure your spot at the Digital Innovation Festival 2026. Join us to learn from top experts, network with peers, and get hands-on experience with the latest tech."
- **CTA Button:** `Get Your Ticket`

### Event Schedule

- **Morning Sessions (10:00 AM - 12:30 PM)**
    - **10:00 AM:** Opening Keynote by Dr. Elara Vance: "Ethical AI: Building for a Better Future"
    - **11:00 AM:** Workshop A: "Python for Beginners: From Zero to App"
    - **11:00 AM:** Workshop B: "Figma Prototyping: Bringing Ideas to Life"
    - **12:00 PM:** Q&A with Dr. Elara Vance
- **Lunch Break (12:30 PM - 1:30 PM)**
- **Afternoon Sessions (1:30 PM - 5:00 PM)**
    - **1:30 PM:** Talk by Kenji Tanaka: "The Future of Web Performance with Core Web Vitals"
    - **2:30 PM:** Workshop C: "Advanced CSS: The Art of Motion"
    - **2:30 PM:** Workshop D: "Conversational UI Design" led by Dr. Sofia Castillo
    - **4:00 PM:** Panel Discussion: "The Role of Human Skills in an AI World"
    - **5:00 PM:** Closing Remarks & Raffle

---

### Our Sponsors

- **Header:** "Proudly Supported By"
- **Content:**
    - **Platinum Sponsor:** TechCorp Solutions
    - **Gold Sponsors:** Global Tech, Innovate LLC
    - **Media Partners:** The Digital Digest, Future Web Magazine

:root,
[data-theme='light'] {
/_ Background and Text _/
--bg-color: #F7F9FC; /_ Light gray for the main background, easy on the eyes _/
--card-bg-color: #FFFFFF; /_ Pure white for cards and containers to create contrast _/
--text-primary: #1F2937; /_ Dark charcoal for main headings and strong text _/
--text-secondary: #6B7280; /_ Soft gray for body text and paragraphs _/

/_ Borders and Separators _/
--border-color: #E5E7EB; /_ A light gray to define elements subtly _/

/_ Brand and Accent Colors _/
--brand-blue: #007BFF; /_ A vibrant, trusted blue for brand elements _/
--accent-green: #10B981; /_ A fresh green for success states and positive actions _/

/_ Header Colors _/
--header-bg: #F0F4F8; /_ A slightly darker gray to visually separate the header _/
--header-text: var(--text-primary);

/_ Link and Button States _/
--link-color: var(--brand-blue);
--link-visited-color: #6C757D; /_ A muted gray for visited links _/
--link-hover-color: #0056B3; /_ Darker blue on hover _/
--link-focus-color: #0056B3; /_ Same as hover, with an outline _/
--link-active-color: #004085; /_ Very dark blue for active click _/

/_ Buttons _/
--button-bg: var(--brand-blue);
--button-text: #FFFFFF;
--button-hover-bg: #0056B3;
--button-focus-bg: #0056B3;
}

:root,
[data-theme='dark'] {
/_ Background and Text _/
--bg-color: #111827; /_ Dark charcoal for the main background, reduces eye strain _/
--card-bg-color: #1F2937; /_ A lighter shade of dark gray for cards _/
--text-primary: #F3F4F6; /_ Off-white for main headings _/
--text-secondary: #D1D5DB; /_ Lighter gray for body text _/

/_ Borders and Separators _/
--border-color: #374151; /_ A subtle, darker gray to separate elements _/

/_ Brand and Accent Colors (Consistent with light mode) _/
--brand-blue: #00BCD4; /_ A tech-focused cyan for brand elements _/
--accent-green: #10B981;

/_ Header Colors _/
--header-bg: #1F2937;
--header-text: var(--text-primary);

/_ Link and Button States _/
--link-color: var(--brand-blue);
--link-visited-color: #9C27B0; /_ A soft purple for visited links _/
--link-hover-color: #4DD0E1; /_ A lighter cyan on hover _/
--link-focus-color: #4DD0E1;
--link-active-color: #00838F; /_ Dark cyan on active _/

/_ Buttons _/
--button-bg: var(--brand-blue);
--button-text: var(--bg-color); /_ Dark text on a colored button _/
--button-hover-bg: #4DD0E1;
--button-focus-bg: #4DD0E1;
}
