# Web Developer Test

## Digital Marketing

Via is implementing a Digital Marketing strategy that involves several landing pages served by a headless CMS. Your job for this test is to develop the landing page from a Figma file taking in consideration Web development good practices (Responsiveness, SEO, Performance, Accessibility).

## Guidelines

- This exercise should take you 4-6 hours to complete
    - They don’t need to be consecutive hours, and we won’t be timing you! This is simply a guideline.
- We recognize this time frame might not let you be as comprehensive as you’d like. That’s okay!
- You can use placeholders for all images except the Hero Banner
- Links can navigate to blank pages

## Requirements

For this exercise, you will implement our marketing landing-page based on a set of provided designs. The figma file for the project is available at the root of this repo. (Designs for both desktop and mobile views can be found in the figma file).

Our engineering team has already provided an API endpoint where the blog post's data comes from, the *Additional Info* section includes the API endpoint and more information about our marketing team goal for this position. For this exercise, you'll only be building the frontend that communicates with the API endpoint. (You won't need to make any additional changes to the API itself.)

Your implementation should meet the following requirements:

- Read blog data from the API provided (see Additional Docs below).
- Work at all screen sizes, including the desktop and mobile views provided in the designs.
- Gracefully handle errors that come back from the API.
- Choose ***only one*** of the following requirements:
    - Improve the accessibility of the landing page.
    - Add pagination to blog list component.
    - Write your code in TypeScript.
    - Do something else that shows off your skills! (If you choose this option, explain in your README why this is a valuable addition.)
    

Along with your code submission, please include a **brief** README to cover the following:

- Explain any decisions you made when working on the assignment. (Trade-offs or other considerations.)
- What are some questions you would ask the designer about this design?
- We are always looking to improve our interviewing process! Please let us know what your experience was completing this project. (Your answer here won't count for/against you, but we'll use your feedback to make improvements to this assignment.)
    - Was the scope too large to finish within the given time requirement? Was it not large enough? Are there any improvements we could make the prompt easier to understand?

Your goal is to finish as much of this as you can in the time that you have!

## Additional Info

### Blog Posts API endpoint

Our engineering team has already built an endpoint (**/api/blog-posts**) that you can use to read the blog data. Unfortunately, the endpoint isn't super reliable. Sometimes, things go wrong on the server, and requests will return a 500 error code. In that case, the response will look something like this:

- [Blog API endpoint](https://strapi-jhve.onrender.com/api/blog-posts)

### Our marketing team goals

There are two main goals from the marketing perspective:

1. Site, blog and landing pages.
2. Attribution structure and integrations.

For the first one, we need a great performance in terms of loading time, SEO structure and UX/UI. This is needed to have a good first impression on potential clients and improve our Google ranking.

The second goal is more for tracking and analysis. We need to have everything integrated to our tools correctly so we can have the correct attribution of the traffic and leads. Passing over UTMs parameters is a must for the landing pages. Also, a good Google Analytics and heatmap integration is needed to understand our visits behavior.
