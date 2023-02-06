---
prev: image.md
next: loading-class.md
---

# Loading

> 로딩중 이미지

## Examples

<div class="box box-row">
  <div class="loading">
    <div class="loading-circle"></div>
    <div class="loading-text">Loading ...</div>
  </div>
</div>

## Codes

<CodeGroup>
  <CodeGroupItem title="html">

```html
<div class="loading">
  <div class="loading-circle"></div>
  <div class="loading-text">Loading ...</div>
</div>
```

  </CodeGroupItem>
  <CodeGroupItem title="SCSS">

```scss
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.loading {
  $border-color: #8883;
  $border-point-color: #7fff00;
  $circle-size: 40px;
  $circle-width: 4px;
  $animation-speed: 1s;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &-circle {
    width: $circle-size;
    height: $circle-size;
    border: $circle-width solid $border-color;
    border-bottom-color: $border-point-color;
    border-radius: 50%;
    animation: spin $animation-speed infinite;
  }
  &-text {
    margin-top: 1em;
  }
}
```

  </CodeGroupItem>
</CodeGroup>

::: tip other loading animations
[simple loading...](https://codepen.io/haksoo/pen/VwaZEgw)
:::

<style lang="scss" scoped>
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.loading {
  $point-color: #7fff00;
  $circle-size: 40px;
  $circle-width: 4px;
  $animation-speed: 1s;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // 임의 사이즈 컨텐츠
  height: 200px;

  &-circle {
    width: $circle-size;
    height: $circle-size;
    border: $circle-width solid #8883;
    border-bottom-color: var(--c-brand);
    border-radius: 50%;
    animation: spin $animation-speed infinite;
  }
  &-text {
    margin-top: 1em;
  }
}
</style>