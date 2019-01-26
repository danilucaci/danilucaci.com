---
title: "Applicacion de pelis"
description: "Estudio de caso de pelis."
date: "2018-11-02"
category: "work"
tags:
    - UX/UI Design
    - iOS
    - E-Commerce Checkout
posted: true
image: "./movie_app_presentation.png"
lang: "es"
---

I decided to design this app as each time I tried to find and book a movie, all the websites and apps that I used had outdated designs, no real benefit to their membership plans and very limited searching and filtering features.

Therefore, I decided to see how I could improve the movie searching and booking experience.

The app was design based on my personal assumptions, pain points and needs, so it would need to be validated with real user testing, to see if other users are having the same issues and if the design solutions created, help them achieve their end goals.

To solve the different pain points the users were having and design the features to solve them, I decided to follow a modified version of Jeff Gothelf’s Lean UX process. Based on the initial assumptions, I made two proto-personas, Ana and Alex. Then, using the sub-hypothesis statements, I started working on a list of features that would serve each of their pain points and needs.

**The final design includes:**

* Advanced faceted search and filtering to allow users to find movies.
* Save movies for later.
* In-app movie reviews and ability to follow favorite reviewers.
* Membership plans with multiple benefits.
* Guest checkout experience.
* Segmented, highly optimized checkout flow.

<div class="toc">
<h3 class="toc__title">Table of Contents</h3>
<!-- TOC -->

- [Previous Assumptions](#previous-assumptions)
- [Proto–Personas](#protopersonas)
- [User Stories](#user-stories)
- [Lean UX sub-hypothesis statements](#lean-ux-sub-hypothesis-statements)
- [Advanced Filtering and Searching](#advanced-filtering-and-searching)
- [Read reviews and follow reviewers](#read-reviews-and-follow-reviewers)
- [Save favorite movies](#save-favorite-movies)
- [Movie booking guest checkout](#movie-booking-guest-checkout)

<!-- /TOC -->
</div>

##Previous Assumptions

* Users have difficulties searching and finding movies.
* Users have to exit the app, or website, to read reviews for the movie they would like to watch.
* They have difficulties viewing the movie trailers as they don’t always load correctly.
* Users can’t purchase movie tickets without having to sign up, no guest checkout experience is available.
* Users that like to watch many movies each month, feel that the tickets are too expensive.
* The UI is overloaded with adds.
* Main CTA’s don't stand out or are unclear to what will happen if they are pressed.

Based on these assumptions I created two proto-personas to create the features that would solve their pain points and needs.

##Proto–Personas

###Ana

She is a cinema enthusiast that would like to watch several movies each month without having to spend too much money. She doesn't mind signing up for a membership plan if it provides the right benefits to her.

<div class="container-8col">


</div>

###Alex

He is in a crowded and noisy restaurant with his date and they decided they would like to see a movie tonight. They are not sure which movie they might like, so they need a way to search and filter movies, read reviews and book the tickets easily without wasting too much time.

<div class="container-8col">


</div>

The next step was to create the user stories for each of their main pain points.

##User Stories

###Alex

#####User Story

>“As a person on a date I want to be able to find a movie to watch tonight with my date, which we will both enjoy.”

#####User Need

**Search and find movies.**

####Feature:

* Advanced Filtering and Searching.

#####User Need

**Read reviews and follow favorite reviewers.**

####Features:

* Find, read and write reviews.
* Follow favorite reviewers.

#####User Need

**Save his favorite movies for later.**

####Feature:

* Save favorite movies.

#####User Need

**Choose the best showtime and seats.**

####Features:

* See all the available seats for each movie session.
* Interactive seat choosing interface.
* See each theaters layout and where the seats are.

#####User Story

>“As a user I need a fast and easy way to book a movie so that I can cary on with my date.”

####Featuress:

* Guest checkout with an option to create an account at the end.
* Multiple payment options.
* Biometric payment options using Apple Pay.
* Segmented checkout.

###Ana

#####User Story

>“As a cinema enthusiast, I need a membership plan with offers and discounts so that I can watch as many movies as I would like, without having to spend too much money.”

#####User Need

**Membership plan with offers and discounts.**

####Features:

* Membership plan with offers and discounts.
* Members only special movie screenings.

#####User Need

**Unlimited movie viewing each month.**

####Features:

* Membership plan with unlimited movie viewing each month.
* Priority access to the cinema bar to avoid long queues.

**To sum up, the main paint points these features are solving for the personas are:**

* Offer a membership plan for users that would like to watch many movies. The plans should be based on a subscription model and offer unlimited movies, significant discounts, and several other benefits for the users. This way they will feel that the plans offer a decent value and are worth the investment. As an added benefit for cinema enthusiast, the plan would offer special preview screenings and a priority bar access to avoid long queues.
* Create an easy to use and straightforward way of searching for movies, learning more about them and purchasing the tickets with having to register or spend too much time in the process.

##Lean UX sub-hypothesis statements

Following the next step in the Lean UX process, Jeff Gothelf recommends we create a sub-hypotheses features list to get a better picture of which persona each feature is serving.

The sub-hypothesis statement definition:

>“We will create **this feature** for **this persona** in order to achieve **this outcome**.”

So I began working on the sketches of how each feature could be designed. First I started with the user story of Alex and his need to search, filter and decide on a movie.

##Advanced Filtering and Searching

####Sub-hypothesis statement

<span class="sub-hypothesis">We will create **an advanced searching and filtering feature** for **Alex** in order to **help him find a movie that he and his date would like to watch.**</span>

One of the more challenging parts of the design of this app for me was how to implement the searching and filtering feature. The final design was the result of several trials and errors made before I decided on the final version.

####First versions of the search, and filtering and sorting features

Before I decided on the final version I tried several other ones, however, they all had their pros and cons.

My first design of the nav bar included the search bar and the tabbed navigation which showed movies being screened during the day, week, upcoming or by how popular they were.

<div class="container-12col">
<div class="container-375">


</div>
<div class="pros-cons">
<div class="pros-cons__component">

####Pros

* Search bar is always visible.
* Users can easily see the movies which are playing today, this week, upcoming or by how popular they are.

</div>
<div class="pros-cons__component">

####Cons

* The filter and sort buttons are hidden behind the search bar. The user has to initiate the search by tapping the search button.
* Once search is activated, the tabbed navigation is a duplicate of the filtering options available.
* Do I show the tabbed navigation when filtering is open, or not? Will it confuse the user?

</div>
</div>
</div>

One of the biggest issues of this version for me was what happened if the user was on the Upcoming tab when Search was activated? Is the filtering, searching and sorting applied only on the results of the Upcoming tab, or are they applied on the entire list of movies the app has currently available?

<div class="container-12col">
<div class="container-375">


</div>
<div class="container-375">


</div>
</div>

In order to try to solve this issue I removed the tabbed navigation and showed the filter and sort button all time, however when the search bar was activated and the user was typing, the sort and filter buttons had to move below it to make room for the larger search bar, which caused layout shifts or I had to leave extra room in the nav bar for when the search bar was active.

So I had to keep searching for a better solution.

<div class="container-12col">
<div class="container-375">


</div>
<div class="container-375">


</div>
</div>

In order to find a better solution to this design problem, I decided to do some competitive analysis—even though most of the apps analyzed were not direct competitors—to see how other apps were solving this issue and what design patterns they were using.

<div class="container-375">


</div>

The first design studied was how Airbnb was showing their buttons to choose the dates and guests when searching for a home. This way there is no need to hide the buttons behind the search bar.

<div class="container-375">


</div>

Asos.com shows their sort and filter buttons with a more visual weight that Airbnb, however, they show the search bar in a different screen. One of the benefits of the way Asos.com implements their sorting and filtering options is that it allows them to easily indicate if the sorting or filtering options are applied to remind the user that the results shown are being affected by them. 

Another good design pattern used is indicating the number of available results the applied filters return.

<div class="container-375">


</div>

Crutchfield.com’s website shows the search bar and sorting and filtering options at the same time, even though their sort and filter buttons are more separated from the search bar and don’t have the same visual weight as the Asos.com example.

<div class="container-375">


</div>

zalando.es features one of the best filtering experiences for their users.

Besides always showing the filtering button, they also indicate their users which filtering options have been activated. Furthermore, users are also able to remove individual filters without having to open the filtering menu again.

A “clear all filters” button is also used to allow their users to easily clear all the current filters applied.

###The final version

<div class="container-12col">
<div class="container-375">


</div>
<div class="container-375">


</div>
</div>

The final version included with the app had all the features I needed and none of the disadvantages.

I decided to use a combination of the different design patterns mentioned above, which allowed me to include a full-width search bar, always visible filter and sort buttons and applied filters.

Another benefit of using this approach is that users can apply different filters to improve their search, without having mutually exclusive options, as the <a href="https://baymard.com/blog/allow-applying-of-multiple-filter-values" target="_blank" rel="noopener">Baymard Institute recomends<span class="sr-only">Opens in new window</span><span aria-hidden="true" class="external-link"></span></a> in their article on E-Commerce UX, where they found that 45% of the users tested, tried to apply multiple filters at some point.

By using checkbox style buttons for the filters, users can easily enable and disable filtering options, which don’t have to depend on each other.

###Filtering options final prototype

<figure>
<span class="video-iphoneX--container">
<span class="video-iphoneX--video">
<video autoplay loop muted playsinline controls>
Your browser does not support HTML5 video.
<a href="./movie_filtering_prototype.gif">View the gif version of the movie filtering interaction prototype.</a>
</video>
</span>
</span>
<figcaption>The final prototype and design of the movie filtering interaction.</figcaption>
</figure>

###Sorting options

Another important part of the movie finding experience I studied was the sorting functionality. Besides the normal sorting options of “Price Low to High” or “Rating” I decided to improve the sorting experience by using category-specific sorting options. The Baymard Institute encourages designers should provide category-specific <a href="https://baymard.com/blog/category-specific-sorting/" target="_blank" rel="noopener">sorting options<span class="sr-only">Opens in new window</span><span aria-hidden="true" class="external-link"></span></a> to allow their users improve the results they see by using category-specific options such as—in my case—Popularity (the most booked movies), or by user rating (the highest rated movies first).

<div class="container-375">


</div>

By using a combination of the mutually exclusive filters and the enhanced sorting with category-specific options, users can easily find the movies that best suits their personal needs and tastes.

###Movie searching

The searching experience was designed to show in real time the number of results the query typed by the user has, as well as showing only the relevant results.

<figure>
<span class="video-iphoneX--container">
<span class="video-iphoneX--video">
<video autoplay loop muted playsinline controls>
Your browser does not support HTML5 video.
<a href="./movie_searching_prototype.gif">View the GIF version of the movie searching experience prototype.</a>
</video>
</span>
</span>
<figcaption>The final prototype and design of the movie searching experience.</figcaption>
</figure>

###Movie searching and filtering wireflow diagram

<div class="container-wireflow">


</div>

##Read reviews and follow reviewers

####Sub-hypothesis statement

<span class="sub-hypothesis">We will create **in app movie reviews** for **Alex** in order for **him to be able to read reviews other users have made.**</span>

Users can read reviews of the movies they might like to watch directly in the app without having to look for them on Google. They can also follow a reviewer and see all the other reviews the reviewer has made, by opening the reviewer's profile.

By allowing users to read reviews made by others, the principle of social validation is used which increases their confidence in whether they would enjoy the movie or not.

###Reading reviews prototype

<figure>
<span class="video-iphoneX--container">
<span class="video-iphoneX--video">
<video autoplay loop muted playsinline controls>
Your browser does not support HTML5 video.
<a href="./movie_reviews_prototype.gif">View the GIF version of the movie review and following a reviewer prototype.</a>
</video>
</span>
</span>
<figcaption>The final prototype and design of reading a movie review and following a reviewer.</figcaption>
</figure>

##Save favorite movies

####Sub-hypothesis

<span class="sub-hypothesis">We will create **a save favorite movies feature** for **Alex** so that he can **save his favorite movies for later.**</span>

Users can save their favorite movies for later, in the app, so that they can have a list of the movies they would like to see. They can save the movie in any of the movie listing screens or within the movie details page. Once users have saved a movie, they can check their personal list of movies on their account page.

<div class="container-12col">
<div class="container-375">


</div>
<div class="container-375">


</div>
<div class="container-375">


</div>
</div>
</div>

###Saving a favorite movie and reading reviews wireflow diagram

<div class="container-wireflow">


</div>

###Choose movie session and seats.

####Sub-hypothesis

<span class="sub-hypothesis">We will create **a seat choosing feature** for **Alex** so that he can **see which seats are best and book them.**</span>

###Choosing a movie session

Once users have decided which movie they would like to see, they can filter the available showtimes by the day or the time the movie is playing or by the type of viewing experience, such as IMAX, 3D, 4D, etc.

After that, users can then choose the exact movie session. When choosing a showtime, users will be able to see how many available seats are left for each of the sessions to decide whether they should hurry or not to buy the seats if not many are left.

<div class="container-375">


</div>

###Choose movie seats

The seat choosing process has been another part of the app's design where I had to try several versions before I decided on the final one.

###The initial version

In the first version of the design, I tried to pack all of the different seats a movie theater might have, however, I soon realized that this layout isn’t always the same and most cinemas have small and large rooms with many more seats than this approach has.

Another issue I had was that the tap sizes were not large enough to meet the iOS requirements of 44pt or the Android ones of 48pt. 

When the user tried to choose a seat, he might accidentally choose one next to the seat he is trying to pick, so I had to increase the size of the seats in order to have large enough tap sizes.

<div class="container-12col">
<div class="container-375">


</div>
<div class="pros-cons">
<div class="pros-cons__component">

####Pros

* All of the cinema's seats are always visible.
* Can easily indicate which seats have been chosen.
* Fits up to 20 or more chosen seats at the same time without clipping.

</div>
<div class="pros-cons__component">

####Cons

* Not a realistic seat layout and theater floor plan.
* Tap size isn’t large enough.
* Users might select the wrong seat due to the small tap size.

</div>
</div>
</div>

###The improved version

In order to solve the issues of the initial design, I increased the padding between each of the seats and the size of each of them to have a larger and more appropriate tap size.

In order to solve the issue of the layout not being realistic, I decided to use a scrolling seat floor plan with a mini-map in the bottom of the screen, where the user could get an idea of the general location of the current view inside the theater's room.

This approach solved most of the issues I had with the initial one, and also allowed me to show a large number of selected seats the user has chosen, as not every purchase is going to be a 2 seat purchase for a couple. A group of friends of 6 or more people might also want to watch a movie, so I had to think of a way to show more than 2 or 3 chosen seats at the same time.

<div class="container-375">


</div>

###The final prototype

<figure>
<span class="video-iphoneX--container">
<span class="video-iphoneX--video">
<video autoplay loop muted playsinline controls>
Your browser does not support HTML5 video.
<a href="./choosing_seats_prototype.gif">View the GIF version of the seat choosing process prototype.</a>
</video>
</span>
</span>
<figcaption>The final version of the seat choosing process with a mini-map and scrolling seat interface.</figcaption>
</figure>

##Movie booking guest checkout

###Sub-hypothesis statement

<span class="sub-hypothesis">We will create **a guest checkout flow** for **Alex** in order for him to be able to **purchase movie tickets without having to create an account**.<span>

One of the most important parts of this project was how to design the checkout flow in a way that reduces the perceived friction to a minimum and allows the users to complete the purchase as fast as possible.

####The main optimizations made to the checkout flow are:

* Segmented checkout flow.
* Guest checkout flow for all users, registered or not.
* Ability to create an account in the order confirmation page.
* Fewer form fields, only require the necessary ones.
* Single form field for the user’s name.
* Explain why information is required.
* Multiple payment options, third–party and biometric.
* Always visible—and detailed—order summary.
* A detailed breakdown of the previous steps in the checkout.
* Offer store pick–up as a shipping option.
* Address auto-completion.
* Billing address defaults to billing.
* Optional form fields behind a link.
* Country and city detection from the zip code (with manual override if the autocompletion fails).
* Respect the “back button” mental model.
* Correct usage of the different mobile keyboards.

###Movie booking guest checkout flow

<div class="container-12col">
<div class="container-375">


</div>
<div class="pros-cons">
<div class="pros-cons__component">

The first checkout optimization made was allowing the users to continue the checkout as a guest. According to the research made by the Baymard Institute, <a href="https://baymard.com/blog/delayed-account-creation" target="_blank" rel="noopener">up to 37% of the users tested<span class="sr-only">Opens in new window</span><span aria-hidden="true" class="external-link"></span></a>, would abandon the checkout if they were forced to create an account. 

Guest checkout experiences are also helpful to registered users who might have forgotten their passwords, which according to the same research, causes up to 19% of all users to abandon the checkout process.

By having to create an account first, users will have a general perceived friction which they will feel during the entire process as they will think that the rest of the form fields are related to the account creation step, even though it is only one extra form field (password).

Designers should also let their users know that they can still create an account at the end of the checkout flow if they would like to do so.

Also, according to the research by the Baymard Institute, privacy-concerned users <a href="https://baymard.com/blog/checkout-experience-seemingly-unnecessary-information" target="_blank" rel="noopener">are less reluctant to share<span class="sr-only">Opens in new window</span><span aria-hidden="true" class="external-link"></span></a> their personal information, such as their phone number or email address, if we explain why we are asking for it.

</div>
</div>
</div>

###Delayed account creation

<div class="container-375">


</div>

###Guest checkout payment methods

The different payment methods the app accepts are presented using 3 buttons placed next to each other, following recommendations from the research findings of the Baymard Institute. <a href="https://baymard.com/blog/payment-method-selection" target="_blank" rel="noopener">According to their research<span class="sr-only">Opens in new window</span><span aria-hidden="true" class="external-link"></span></a>, payment methods should be placed together in close proximity (Gestalt principles would help here) so that users can easily compare them with a single glance and see which one is currently active. Users should also be able to compare the different costs associated to each payment method—if they apply—such as a 2% fee when using a particular payment type. 

Designers should also choose by default the most popular payment method in their country or region, to speed up the process for the user and nudge their users towards the payment method they would have chosen anyway.

<div class="container-12col">
<div class="container-375">


</div>
<div class="container-375">


</div>
</div>

In order to design the credit card form, several best practices were used.

The input field for the credit card number was designed to auto insert spaces every 4 digits (when Visa cards are used, others differ), as most users double check the card numbers they typed using groups of 4 digits or they insert spaces manually to be able to easily read and verify the number. Research has shown that <a href="https://baymard.com/blog/credit-card-field-auto-format-spaces" target="_blank" rel="noopener">as many as 23% of the users tested<span class="sr-only">Opens in new window</span><span aria-hidden="true" class="external-link"></span></a> would insert spaces every 4 digits, therefore, credit card forms should allow the users to insert spaces—or better yet, auto-insert them— without causing any validation errors. Furthermore, a simple <a href="https://gist.github.com/DiegoSalazar/4075533" target="_blank" rel="noopener">Luhn validation script<span class="sr-only">Opens in new window</span><span aria-hidden="true" class="external-link"></span></a> could be used to check if the card number is valid.

Another best practice used was to recognize the credit card type from the number the user has typed, this way we don’t need to add another form field for it.

The expiration date input field was designed to match the physical layout and format of “MM/YY” found on most credit cards. Research has shown that <a href="https://baymard.com/blog/how-to-format-expiration-date-fields" target="_blank" rel="noopener">most users will try to follow the same format<span class="sr-only">Opens in new window</span><span aria-hidden="true" class="external-link"></span></a> printed on the card when typing the number. Therefore, forms should be designed in a way that they respect the physical format found on credit cards.

Form fields used for credit cards should also use input masks that auto-insert a forwards slash character after the MM in the expiration date.

###Movie booking guest checkout wireflow diagram

<div class="container-wireflow">


</div>

###Guest checkout prototype

<figure>
<span class="video-iphoneX--container">
<span class="video-iphoneX--video">
<video autoplay loop muted playsinline controls>
Your browser does not support HTML5 video.
</video>
</span>
</span>
<figcaption>The final prototype of the guest checkout process.</figcaption>
</figure>

##Membership plan with offers and discounts.

In order to respond to the user need of the proto-persona Ana, I decided to create a membership plan that had several discounts and benefits. There are two different plans, based on a monthly or yearly rate, which include unlimited movies viewing each month and discounts when buying snacks or tickets. 

###Membership plan with offers and discounts prototype

<figure>
<span class="video-iphoneX--container">
<span class="video-iphoneX--video">
<video autoplay loop muted playsinline controls>
Your browser does not support HTML5 video.
</video>
</span>
</span>
<figcaption>Membership plan with offers and discounts final prototype.</figcaption>
</figure>

###Membership plan with offers and discounts wireflow diagram

<div class="container-wireflow">


</div>

##Membership plan sign up process

After creating the different membership plans I began working on the sign-up flow for the membership plans. It included a segmented checkout flow divided into 4 parts:

* Account creation
* Shipping information
* Payment information
* Order confirmation

The process was divided into 4 parts to avoid showing on the same screen too many form fields and leading to choice paralysis. This way the form had a linear process which respected the mental model of moving backward on each step when the user wanted to modify any information added.

<div class="container-12col">
<div class="container-375">


</div>
<div class="pros-cons">
<div class="pros-cons__component">

The first step in the membership sign up process was collection the user's personal information, such as the email address, phone number, full name, and password. The user could also log in if he/she already had an account previously to use the saved personal information.

The form fields used are implemented using the correct keyboards for each type of data.

</div>
</div>
</div>
