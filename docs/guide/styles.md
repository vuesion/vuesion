# Design System

The vue-starter comes with a Design System that you can 100% customize. 
Design Systems are really complex and the key to a good Design System is
consistency.

It is hard to achieve a unique Brand Identity with a UI toolkit that is already build on top of another Design System (e.g. Material Design).
It is also hard to achieve consistency if you have to combine multiple UI libraries without forking
and customizing them to fit your Brand Identity.

_Over the years we discovered that it's much harder to maintain all of these forks for a project than
building our own set of components that are **100% customizable** because the code is 100% accessible._

::: tip Design System
This Design System is the next step, it is a blueprint that enables you to create your very own Design System that perfectly fits your
Brand or your clients Corporate Identity.
:::

::: warning 3rd Party UI
We are aware that not everyone has to implement their own professional Design System.
If this is the case for you, you might be interested in [integrating a 3rd party UI library](/third-party)
:::

## Branding

### Color Palette

<img :src="$withBase('/color-palette.jpg')" alt="architecture"> 

The naming convention of the color palette is structured in the following way

`Meaning`-`Weight`-`Shade`

following _Meanings_ are included:

- **primary** (Main Colors)
- **secondary** (Accent Colors)
- **tertiary** (Utility Colors)

the following _Weights_ are included:

- primary **1-2**
- secondary **1-5**
- tertiary **1-5**

and the following shades are included:

Shade | Opacity
------|--------
1     | 100 %
2     | 80 %
3     | 60 %
4     | 40 %
5     | 20 %
6     | 10 %
7     | 5 %

### Brand Colors
Every brand color is related to a color of the color palette.

#### Brand Variations
These are the colors that we use to create different variations of components.

Variation        | Palette Color
-----------------|--------------
brand-primary   | primary-2-1
brand-secondary | secondary-1-1
brand-tertiary  | primary-1-5
brand-danger    | tertiary-1-1
brand-warn      | tertiary-2-1
brand-success   | tertiary-3-1

#### Background Colors
These are the colors that we use for document backgrounds or sections on a page.

Variation                | Palette Color
-------------------------|--------------
bg-color                 | tertiary-4
bg-color-variant         | primary-1-6
bg-color-inverse         | tertiary-5
bg-color-variant-inverse | primary-1-3

#### Text Colors
These are the colors that we use for document text or sections on a page.

Variation                    | Palette Color
-----------------------------|--------------
text-color                   | tertiary-5
text-secondary-color         | primary-1-3
text-color-inverse           | tertiary-4
text-secondary-color-inverse | primary-1-6
link-color                   | secondary-1-1
link-hover-color             | darken($link-color, 5%)

#### Border Colors
These are the colors that we use for borders.

Variation            | Palette Color
---------------------|--------------
border-color         | primary-1-5
border-color-inverse | primary-1-2

### General Branding
General rules for your Brand identity.

#### Spacing
To keep the spacing consistent we have one variable `$space-unit` that is used for spacings,
you can multiply or divide this value as you want. 
The default value in the blueprint is `0.8rem`.

#### Border Radius
To keep the border-radius consistent we have one variable `$border-radius` with the value `$space-unit * 0.5` (0.4rem).

#### Transitions
It's good to keep your animation language consistent to achieve that we defined a variable
for the transition duration `$transition-duration` with the value `250ms`
and a variable for the easing-curve `$easing-curve` with the value `cubic-bezier(.17,.67,.83,.67)`.

## Typography
Barlow is the standard type face for the Design System blueprint.

### Font Weights
Variable             | Weight
---------------------|-------
$font-weight-thin    | 100
$font-weight-regular | 300
$font-weight-medium  | 500
$font-weight-bold    | 700

### Font Sizes
Level          | Font-size   | Font-weight
---------------|-------------|------------
Small Text     | 80%         | $font-weight-regular
Paragraph      | 1.6rem      | $font-weight-regular
H1             | 4.8rem      | $font-weight-medium
H2             | 3.2rem      | $font-weight-medium
H3             | 2.4rem      | $font-weight-medium
H4             | 2rem        | $font-weight-medium
H5             | 1.6rem      | $font-weight-medium
H4             | 1.6rem      | $font-weight-bold

### Line heights
Line height is measured by taking the font size and adding 0.8rem. 

### List Style
Lists are indented by 8px with an additional 0.8rem between the bullet and content.

## Layout
The Grid-System is based on Flex box and comes in form of three included components.

Component     | Purpose
--------------|-------
VueGrid       | Container that is limited in the width, general page layout
VueGridRow    | Row that is always 100% width and will be stacked on the page
VueGridItem   | Item in the row that will be distributed equally on the page 


### Break points
If you want to use a break point inside one of your components, we provide you width
mixins to keep everything consistent and to avoid unnecessary media definitions:

`@include mediaMin(break-point-id)`

`@include mediaMax(break-point-id)`

Break Point Id   | MinWidth | MaxWidth | GutterWidth
-----------------|----------|----------|------------
phone            | 320px    | 319px    | 3.2rem
tabletPortrait   | 768px    | 767px    | 3.2rem
tabletLandscape  | 1024px   | 1023px   | 3.2rem
smallDesktop     | 1280px   | 1279px   | 3.2rem
largeDesktop     | 1440px   | 1439px   | 3.2rem
