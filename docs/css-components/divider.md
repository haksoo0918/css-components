---
prev: dialog.md
next: empty.md
---

# Divider

> 구분선

## Examples

<div class="box box-row">
  <hr class="divider">

  <div class="divider divider-text">
    <span class="text">with message</span>
  </div>

  <div class="divider divider-dashed divider-text">
    <span class="text">dashed style</span>
  </div>
</div>

## Codes

<CodeGroup>
  <CodeGroupItem title="html">

```html
<!-- base -->
<hr class="divider">

<!-- with message -->
<div class="divider divider-text">
  <span class="text">message</span>
</div>

<!-- dashed border-style -->
<div class="divider divider-dashed divider-text">
  <span class="text">dashed style</span>
</div>
```

  </CodeGroupItem>
  <CodeGroupItem title="SCSS">

```scss
.divider {
  $margin: 1em 0;
  $color: #666;
  $text-size: 16px;
  $text-color: #aaa;

  border-color: $color;
  margin: $margin;

  &-text {
    display: flex;
    align-items: center;
    font-size: $text-size;
    text-align: center;

    &::before,
    &::after {
      content: '';
      width: 100%;
      height: 0;
      border-top: 1px solid $color;
    }

    .text {
      display: inline-block;
      flex: 0 0 0;
      padding: 0 1em;
      color: $text-color;
      white-space: nowrap;
    }
  }

  &-dashed {
    border-top-style: dashed;

    &.divider-text {
      border-top-width: 0;

      &::before,
      &::after {
        border-top-style: dashed;
      }
    }
  }
}
```

  </CodeGroupItem>
</CodeGroup>

<style lang="scss" scoped>
.divider {
  $margin: 1em 0;
  $color: #666;
  $text-size: 16px;
  $text-color: #aaa;

  border-color: $color;
  margin: $margin;

  &-text {
    display: flex;
    align-items: center;
    font-size: $text-size;
    text-align: center;

    &::before,
    &::after {
      content: '';
      width: 100%;
      height: 0;
      border-top: 1px solid $color;
    }

    .text {
      display: inline-block;
      flex: 0 0 0;
      padding: 0 1em;
      color: $text-color;
      white-space: nowrap;
    }
  }

  &-dashed {
    border-top-style: dashed;

    &.divider-text {
      border-top-width: 0;

      &::before,
      &::after {
        border-top-style: dashed;
      }
    }
  }
}
</style>
