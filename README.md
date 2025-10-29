# Jody Holt | Developer Portfolio

This is the source code for my personal portfolio. 
Created using React//Tailwind//TypeScript

---

## Overview

This site demonstrates my personality, skills, and presents the tone I provide through all my collaborative/business endeavors. 

**STACK**

-SPA with React (functonal components, hooks)
-TailwindCSS (custom tokens and theme system)
-Theme Engine (5 themes with automated color adaption per user preference )
-IntersectionObserver (based scroll nav)
-Modular component layout

---

## Project structure

```bash
src/
|-assets/ # Images
|-components/ #Reusable UI components 
|-hooks/ #Custom  React Hooks
|-styles/ #Tailwind + custom theme CSS
|App.tsx
|index.css

```

---

## Theme System

within index:
-5 unique themes are layed out by:
*color-bg 
*color-primary
*color-text
*color-secondary
*color-tertiary

These themes are applied via html[data-theme="x"] and are used across the site for all gradients, tints, accents, etc.


## DEV NOTES as of 10/29/2025

-All social links are dummy values as of now.
-Section layout is controlleted via <Section id="...."></Section> wrappers.
-Images are outdated and will be replaced. 
-UI is mobile-oriented, but device friendly. 


## TODO

-Add links to projects within cards
-Change out experiance tab for resume/skills
-Add animations
-more ways to contact
-Deploy site via personal service


## View Progress

```bash
npm i

npm run dev

## Local:   http://localhost:5173/ (control + click local host url)

```

## Author

Jody Holt
Frontend Developer • Passion Pioneer
[GitHub](https://github.com/Ricearoni1245) • [LinkedIn](https://www.linkedin.com/in/jody-holt-9b19b0256) • [Email](mailto:jholt1008@gmail.com)

