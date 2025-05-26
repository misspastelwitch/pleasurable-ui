# Pleasurable UI - Dutch Digital Agencies

Als team ontwerpen wij een multi-page site met een interface waar gebruikers blij van worden. Wij werken samen met onze opdrachtgever Dutch Digital Agencies, om een nieuwe perspectief op zijn huidige site te laten zien, met nieuwe features zoals:

Live link 🔗 https://pleasurable-ui-ep7m.onrender.com


## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)

## Beschrijving
During sprint 11 our team has focused primarily on collaboration and combining our work from the past sprints with this client to be able to deliver a clean, uniform and reliable product.
On top of this we worked hard to optimise our site, with features such as view transitions, exciting animations and enhancing the overall speed of our page.

### What has changed?

Over the last three weeks we built on our existing code through combining the strengths shown in our work from previous sprints. Miel had a reliable Publications page, which we connected to our Vacatures page made by Stella & Anouar, through building a new homepage. In addition to this we broadened our website with extra Events & Over Ons pages. This required a lot of cooperation & problem-solving, as a lot of our code and design ideas conflicted with our desired end result. 

### Reliability 
When building our additional pages, we started with designing and coding the 	**core functionality**, dat betekent everything that the page needs to function in any environment, before we started styling & enhancing them with fun user interactions. For example, we first had to make sure that the menu at the top of the page led the user to different pages, before adding our cohesive house style and an animation to it. 
![Screenshot 2025-05-26 103030](https://github.com/user-attachments/assets/79d36411-0d20-4908-9e9d-f72dadc5ff41)

<sub> ^ The core functionality or simplest technique of our menu, before styling. Everything works the same but without the enhanced look. </sub>

**What happens when something goes wrong?**
If a user's wifi cuts out, is slow, or if they are using an older device, they may not be abke to load the most optimized version of the site. That is why we have built our website with the core fucntionality first, so that something as small as loading an animation does not inhibit the user's ability to access the site in a functional way. 
This is also useful when building for people who use the website differently, such as people who have Javascript turned off in their browser, or who navigate using their keyboards instea of a mouse or trackpad.

### Progressive Enhancement
Once our pages were able to work properly, we got started on enhancing our individual pages. Miel was able to enhance the publications page with clear sections, a carousel showing various partners of DDA, as well as a filter function which lets the user easily find an article that they would be interested in. Stella was able to implement her description popup on the job openings on the Vacature page, which lets the user apply for jobs. Anouar flipped this and created a form that potential recruiters could fill out in order to post their own job opening. Together we were designed another filter specific to job openings, where the user is able to filter by region, hours, language or experience level. This builds **another layer of user-friendliness** into the site and allows more users to quickly find what they need.

![Screenshot 2025-04-02 103728](https://github.com/user-attachments/assets/27183a04-a6e4-4dc3-a020-566751fec116)
![Screenshot 2025-04-02 104121](https://github.com/user-attachments/assets/7930e23d-6037-4761-89b4-b32c300c6276)

<sub> ^ Stella's job opening popup form, with a confirmation message after the data has been successfully uploaded </sub>
<!-- Voeg een mooie photo toe 📸 -->
![Screenshot 2025-05-26 113538](https://github.com/user-attachments/assets/fc2dc349-1528-4ab6-9f25-2105fec558f1)

<sub> ^ Anouar's job opening form that lets recruiters advertise a role. </sub>

### Performance
<!-- Voeg een audit toe 📸 -->
performance plays a big part in how people experience websites. The longer a user has to wait in order to see the content they need, the likelier they are to view it in more of a negative light, even if there are other features that they might usually love, therefore a **shorter waiting time = a better overall experience.**
In order to maximise our performance, we measured our site using a Lighthouse Performance test, the PageSpeed Insights test, as well as analysing a WebPage test speed graph. The results showed that


### Pleasurability

Finally, we worked on making our site fun and enticing to use. We wanted to 	**create an experience** that would leave a positive memory with the user after they had explored the site. In order to achieve this, we used with small features such as hover states on buttons & photos, a light and dark mode feature for the whole site, as well as view transitions and scroll animations. These tweaks made the site as a whole a lot friendlier and gave off a creative & playful feeling, while staying true to the corporate style of the original design. 

https://github.com/user-attachments/assets/82f8d1d5-409c-4673-b8af-634c57bf3536

<sub> ^ Our finished menu, complete with an animation </sub>

### Outcome
<!-- Voeg een poster visual toe 📸 -->
Through developing & implementing all of these small but mighty features, our site has transformed from 3 individual site components in Sprint 10, to a fully-fledged display of what DDA offers. Although not everything works exactly as planned, and we would have liked to add even more features, we are content with the final product that we were able to deliver over the course of the last two months.


## Gebruik

### User Story 

**1** - You are looking for a job with a design agency in the Netherlands, and would like some insight into which agencies DDA works with, what events are coming up, and information about various hot topics in the design industry.

**2** - You are a design agency in the Netherlands and are looking to advertise a newly opened role on the DDA site. You would like to get to know the team before you commit to placing your job opening on the DDA website, as well as to take a look at some of DDA's previous work.

### Pages
Our site consists of five pages and two sub-pages:

**Pages:** Home, Over Ons, Publicaties, Vacatures, Leden & Events

**Sub-pages:** Solicitatie, Vacature toevoegen

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? Misschien heb je iets met NodeJS gedaan, of heb je een framework of library gebruikt? -->
As this is quite a minimalist website, it was important to us that the layout of each page was cohesive with the rest of the website. In CSS we used a lot of grids, as the majority of the style of this website is blank with black outlines. 

### Solicitatie formulier
For the job application sub-page Stella used a form in combination with a for clause to collect information to be sent. 

```
<form id="solicitatieform" method="POST" action="/">
<label for="name">Naam</label>
<input type="text" id="input" name="name" placeholder="John Doe">

<label for="email">E-mail</label>
<input type="text" id="input" name="email" placeholder="johndoe@gmail.com">
<input type="hidden" name="vacature" value="{{ vacature.id }}">
<input type="submit" id="verstuur" value="verstuur">
</form>

{% for input in soliciteer %}
        <p>{{ input }}</p>
    {% endfor %}
```

In the Server.js file, this converts the form input into a JSON string that can then be stored in the server.
```
 app.post ('/', async function (request, response) {

 const apiResponse = await fetch('https://fdnd-agency.directus.app/items/dda_applications', {
  method:'POST',
  headers: {
    'Content-Type':'application/json;charset=utf-8',

  },
  body: JSON.stringify({
    vacancy: request.body.vacature,
    name: request.body.name,
    email: request.body.email,
  })
 })
 console.log(apiResponse);

 
 response.redirect(303, '/?appliedFor=' + request.body.vacature);
});
```

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE). Bedankt voor het lezen :)
