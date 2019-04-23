---
prev: ./
next: ./FAQ
---

# Introduction

## This is not just another starter project

When starting the development of a new project, it's often tempting to start with some libraries.
They provide solutions to already solved problems, so you can solve on the unique challenges of your application.

But you know that this only works to a certain degree. In most projects you are working on, the number of phrases like
**_"I can not change that because the library does not support it."_** increases over time.

You've often been in situations where you had to write feature-requests, eject the webpack configuration in the first second of the project,
or you have to create a local fork of the library to implement the requested features.

Because you're not the only one with this experience,
we decided to implement all the use cases, that we experienced over time, in this starter.

It's not a library.

**The code is all yours** to modify and build upon.

::: tip No Excuses
The limitations of your project are up to the imagination of the designers in your project and your ability to implement their feature requests.
:::

::: tip Productivity Tip
The key for high-performance engineering is a good balance between a variety of music genres,
for this reason, we provide you with a [Beast mode playlist on Youtube](https://www.youtube.com/playlist?list=PLcLlpvN8RJznCOm4dJ5rN5VJKFfy0hMNp)
:::

::: warning
**Use this project if you are an experienced developer who needs to deliver projects quickly with the highest possible quality.**

If you look for an easier way to get started with Vue and Webpack,
[this template](https://github.com/vuejs-templates/webpack) may be more your cup of tea.
:::

## Recommended Architecture

Vuesion is build on top of the idea of micro-services or a service-oriented-architecture.

This is because a separation of concerns approach is much better to maintain over time and it's much easier to manage a single technology
per service instead of a mix of technologies e.g. PHP server-side-rendering and a Javascript client side app.

::: tip Deployment
The vuesion project should be its own deployable unit, and should be treated as its own service in the architecture.
:::

::: tip Example
If vuesion needs to access a database - the database should be exposed as another service and vuesion
should access this service via RESTful API calls.
:::

#### Architecture diagram

<img :src="$withBase('/architecture.jpg')" alt="architecture">

## Todo

This is an ever-evolving project,
if you want to help or you have an idea how to improve this project -
**feel free to file an [issue](https://github.com/vuesion/vuesion/issues)**
