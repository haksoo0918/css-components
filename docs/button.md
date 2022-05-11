# Button

> 버튼

## Examples

<div class="box">

  <!-- base -->
  <button class="btn" type="button">button</button>

  <!-- link style -->
  <button class="btn btn-link" type="button">link style button</button>

  <!-- outline style -->
  <button class="btn btn-outline" type="button">outline style button</button>

  <!-- disabled -->
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
  border: none;
  border-radius: $border-radius;
  background-color: $color;
  font-size: $text-size;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: darken($color, 10%);
  }

  &.disabled,
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;

    &:hover {
      background-color: $color;
    }
  }

  &-link {
    color: $color;
    background-color: transparent;
    text-decoration: underline;

    &:hover {
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