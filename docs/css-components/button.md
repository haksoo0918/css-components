---
tags:
  - button

prev:
  breadcrumbs.md
next:
  card.md
---

# Button

> 버튼

## Examples

<div class="box">
  <button class="btn" type="button">button</button>
  <button class="btn btn-link" type="button">link style button</button>
  <button class="btn btn-outline" type="button">outline style button</button>
  <button class="btn" type="button" disabled>disabled button</button>
</div>

## Codes

<CodeGroup>
  <CodeGroupItem title="html">

```html
<!-- base -->
<button class="btn" type="button">button</button>

<!-- link style -->
<button class="btn btn-link" type="button">link style button</button>

<!-- outline style -->
<button class="btn btn-outline" type="button">outline style button</button>

<!-- disabled -->
<button class="btn" type="button" disabled>disabled button</button>
```

  </CodeGroupItem>
  <CodeGroupItem title="SCSS">

```scss
.btn {
  $color: #7fff00;
  $border-radius: 0.25em;
  $text-size: 16px;
  $text-color: #333;

  padding: 0.5em 1em;
  color: $text-color;
  border: 1px solid $color;
  border-radius: $border-radius;
  background-color: $color;
  font-size: $text-size;
  text-decoration: none;
  line-height: 1.2;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    border-color: darken($color, 10%);
    background-color: darken($color, 10%);
  }

  &.disabled,
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed; // pointer-events: none 때문에 작동하지 않음. 선택 사항.
    pointer-events: none;

    &:hover { // pointer-events: none 때문에 작동하지 않음. 선택 사항.
      background-color: $color;
    }
  }

  &-link {
    color: $color;
    border-color: transparent;
    background-color: transparent;
    text-decoration: underline;

    &:hover {
      border-color: transparent;
      background-color: rgba($color, 0.2);
    }
  }

  &-outline {
    color: $color;
    border: $color solid 1px;
    background-color: transparent;

    &:hover {
      color: $text-color;
      background-color: $color;
    }
  }
}
```

  </CodeGroupItem>
</CodeGroup>