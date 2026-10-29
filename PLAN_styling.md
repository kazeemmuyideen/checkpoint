# Plan: Style HTMLProject1.html Portfolio

## Goal
Style the existing portfolio (HTMLProject1.html) by creating styles.css, linking it, making navbar inline, changing font to Roboto, and adding classes.

## Current State
- HTMLProject1.html exists with nav using `<nav><ul><li>...</li></ul></nav>` (no classes)
- No styles.css file exists
- No CSS linking

## Required Changes

### 1. Create styles.css
- Import Roboto from Google Fonts
- Make navbar display inline: `.nav-item { display: inline; }` or target nav li
- Add creative styling

### 2. Link styles.css to HTMLProject1.html
Add in `<head>`: `<link rel="stylesheet" href="styles.css">`

### 3. Change navbar display to inline
In HTML, change nav structure to use classes; in CSS use `display: inline` on nav items

### 4. Change font to Roboto
Set `font-family: 'Roboto', sans-serif;` on body

### 5. Add classes to HTML elements
Add classes like:
- nav: class="navbar", ul: class="nav-list", li: class="nav-item", a: class="nav-link"
- sections: class="section" etc.
- be creative with classes

## Implementation Steps
1. Create styles.css with all styles
2. Update HTMLProject1.html:
- Add link to styles.css in head
- Add Google Fonts link or @import (CSS @import is fine)
- Add classes to all elements as needed
- Update navbar structure with classes
- Apply classes throughout

## Files to Modify/Create
- Create: styles.css
- Modify: HTMLProject1.html
