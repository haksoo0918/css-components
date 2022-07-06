---
tags:
  - sass
  - variable

prev: mixins.md
next: utils.md
---

# _variables.scss

> SASS 변수 활용

```scss
// 색상
// ======================
$white: #fff;
$black: #000;
//
$brand-color: #7fff00; // or primary
$point-color: #f20; // or secondary
$text-color: #222;
$link-color: #00f;
$body-bg-color: $white;
$border-color: #ccc;

// 글꼴
// ref: https://getbootstrap.com/docs/5.2/content/reboot/#native-font-stack
// ======================
$font-base: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !default;
// Noto Sans KR 을 웹폰트로 사용시
$font-noto: 'Noto Sans KR', 'Noto Sans', $font-base;

// 길이
// ======================
$header-height: 80px;
$footer-height: 120px;
$border-radius: 0.25rem; // 4px

// Breakpoints
// ref: https://getbootstrap.com/docs/5.2/layout/breakpoints/
// ======================
$breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1400px
);
```
