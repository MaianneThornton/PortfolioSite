# 50 Projects in 50 Days - Rotating Navigation Animation

This is a code along project in the [50 Projects In 50 Days - HTML, CSS & JavaScript Udemy Course](https://www.udemy.com/course/50-projects-50-days/). Sharpen your skills by building 50 quick, unique & fun mini projects.

## Table of contents 😌

- [Overview](#overview)
  - [The project](#the-project)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Code snippets](#im-really-proud-of-these-code-snippets%EF%B8%8F)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview👋🏾

Welcome to the third mini-project of the course!

### The project😥

In this project users will be able to:

- Build a responsive site that rotates to displays the navigation bar

### Screenshot🌇

![](./screenshot.png)

### Links👩🏾‍💻

- Solution URL: (https://github.com/MaianneThornton/50in50_RotatingNavigationAnimation)
- Live Site URL: (https://maianne-rotatingnavigation.netlify.app/)

## My process💭

I started by marking out initial classes and in the html file to be later used for styling. I also added images and icons during this step. Next I began styling the css to begin building the visuals. I then added the animation to rotate the page when the navigation bar is opened. I added functionality by way of JavaScript to switch between classes when the user clicks on a button.

Later I brought over the loading animations that I learned while completing the [Blurry Loading](https://github.com/MaianneThornton/50in50_BlurryLoading) project into this project. 

### Built with👷🏾‍♀️

- Semantic HTML5 markup
- CSS custom properties
- JavaScript

### What I learned👩🏾‍🏫

I learned how to add transitions to rotate an entire element. It gave a very unique look to this page. It was very easy to achieve, and I will be applying this method to future projects.

### Continued development🔮

In the future I plan on continuing to practice using different selectors to be more precise when select elements.

I also plan on continuing to learn the best ways to phrase git commits, so that future viewers can fully understand the changes that have occurred.

### I'm really proud of these code snippets✂️

```css
.container.show-nav + nav li {
  transform: translateX(0);
  transition-delay: 0.3s;
}

nav ul li {
  text-transform: uppercase;
  color: #fff;
  margin: 40px 0;
  transform: translateX(-100%);
  transition: transform 0.4s ease-in;
}
```

### Useful resources📖

- [Resource](https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/) - This is an amazing article which helped me write better commit messages. I'd recommend it to anyone still learning this concept.

## Author🔎

- Website - [Portfolio Site](https://www.maiannethornton.com/Portfolio/index.html)
- Frontend Mentor - [@MaianneThornton](https://www.frontendmentor.io/profile/MaianneThornton)
- GitHub - [@MaianneThornton](GitHub.com/MaianneThornton)
- Twitter - [@MaianneThornton](https://twitter.com/MaianneThornton)
- LinkedIn - [@MaianneThornton](https://www.linkedin.com/in/maiannethornton/)

## Acknowledgments🙏🏾

Special Thanks go to [Brad Traversy](http://www.traversymedia.com/) and [Florin Pop](http://www.florin-pop.com/) creating the course and making reviewing concepts fun 😊.
