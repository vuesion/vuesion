# 应用你的配色

当然, 你想要一个和默认主题不一样的主题.

为了应用你的品牌颜色,打开 `./src/app/shared/styles/_variables.scss`:
看一下这些代码:

```css
/* Brand */
$brand-dark-primary: #7966F3;
$brand-light-primary: #9B9BFD;
$brand-primary: #A851E2;
$brand-accent: #17BEBB;
$brand-warn: #FB3640;

/* Background Colors */
$bg-color: #333;
$bg-color-inverse: #FFF;

/* Text Colors */
$text-color: #FFF;
$text-color-inverse: #333;
$secondary-text-color: #BABABA;

/* Border Colors */
$divider-color: lighten($bg-color, 20%);

/* Animation Language */
$transition-duration: 250ms;

/* Font Sizes */
$font-size: 1.6rem;
$font-size-h1: 4.6rem;
$font-size-h2: 3.6rem;
$font-size-h3: 2.8rem;
$font-size-h4: 2.2rem;
$font-size-h5: 1.8rem;
$font-size-h6: 1.6rem;

/* Font Size Factors */
$font-size-factor-tablet-landscape: 1.125;
$font-size-factor-large-desktop: 1.25;

/* Font Weights */
$font-weight: 300;
$font-weight-h1: 400;
$font-weight-h2: 400;
$font-weight-h3: 400;
$font-weight-h4: 400;
$font-weight-h5: 400;
$font-weight-h6: 700;

/* Line Heights */
$line-height: 1.6;
$line-height-h1: 1.2;
$line-height-h2: 1.25;
$line-height-h3: 1.3;
$line-height-h4: 1.35;
$line-height-h5: 1.5;
$line-height-h6: 1.4;

/* Letter Spacings */
$letter-spacing: .01em;
$letter-spacing-h1: -.1rem;
$letter-spacing-h2: -.1rem;
$letter-spacing-h3: -.1rem;
$letter-spacing-h4: -.08rem;
$letter-spacing-h5: -.05rem;
$letter-spacing-h6: -.1rem;

/* General */
$google-font: 'https://fonts.googleapis.com/css?family=Oxygen:300,400,700|Lato:300,400,700';
$font-family-headings: 'Oxygen', Helvetica, sans-serif;
$font-family: 'Lato', Helvetica, sans-serif;
$space-unit: 0.8rem;

/* Grid */
$screen-phone: 320px;
$screen-phone-max: $screen-phone - 1;
$screen-tablet-portrait: 768px;
$screen-tablet-portrait-max: $screen-tablet-portrait - 1;
$screen-tablet-landscape: 1024px;
$screen-tablet-landscape-max: $screen-tablet-landscape - 1;
$screen-small-desktop: 1200px;
$screen-small-desktop-max: $screen-small-desktop - 1;
$screen-large-desktop: 1440px;
$screen-large-desktop-max: $screen-large-desktop - 1;
$screen-phone-gutter: 16px;
$screen-tablet-portrait-gutter: $space-unit * 2;
$screen-tablet-landscape-gutter: $space-unit * 2;
$screen-small-desktop-gutter: $space-unit * 4;
$screen-large-desktop-gutter: $space-unit * 4;
```

所有的组件都依赖于这些变量, 所以如果你改变了值,一切都将看起来不一样.

::: tip 你有亮品牌色吗?
确认你用了`lighten` SCSS 函数替换了 `darken` SCSS函数.

_**这应该会看起来更好一点**_ :smile:
:::

::: tip 都是你的!
请记住所有vue-starter提供的组件都是**你的**代码,
你可以改变vue-starter的行为, 外观和特性,正如你所想要的那样.
:::
