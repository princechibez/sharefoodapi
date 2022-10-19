<!-- # Backend Assessment

Build and deploy a very simple API that does the following

1.  Calculate and return the age of a person, given their date of birth (dob) as query parameters to `GET /howold`

2.  Limit calls to `GET /howold` and prevent excessive usage from potentially ill-configured or malicious integrators. Only allow a maximum of 3 calls per second for each API client/caller

See full details and instructions in this [Google Doc](https://docs.google.com/document/d/1ma5vKz0j34gwI9WYrZddMM1ENlQddGOVFJ5qdSq2QlQ) -->


## Hello :wave:

# Sharefood assessment API

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)

## Overview

### The challenge

Users should be able to:

- Build an API that takes a parameter of a date of birth timestamp, and returns the number of years till date prior to the parameter
- Check extensively if the parameter is in a correct and standard date format
- Also handle errors professionally if their are any occurences or exceptions

- ### Screenshots
  - ### The bookmark banner section :point_down:
  ![Bookmark Project 1](https://user-images.githubusercontent.com/78439079/181256339-4afe22b0-bad6-49fe-b579-9cb48096f1d4.png)

  - ### The FEATURES section :point_down:
  ![Bookmark Project 2](https://user-images.githubusercontent.com/78439079/181256369-c71c9dfb-ea6a-41e9-a9f1-6ecad26beca7.png)


### Built with

- Node/Express
- Timeago.js
- express-rate-limiter