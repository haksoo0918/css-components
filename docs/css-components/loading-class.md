---
prev: loading.md
next: navbar.md
---

# Loading Class

> 로딩 클래스. 클래스를 이용하여 로딩중 표현.

## Examples

<div class="box box-row">
  <p class="loading">
    동해 물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세. 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세.
  </p>
</div>

## Codes

<CodeGroup>
  <CodeGroupItem title="html">

```html
<p class="loading">
  동해 물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세. 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세.
</p>
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
  $color: #7fff00;
  $size: 30px;

  position: relative;
  min-height: $size * 3;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(125,125,125,.2);
    backdrop-filter: blur(4px);
  }
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    margin: auto;
    width: $size;
    height: $size;
    border: 4px solid rgba(125,125,125,.5);
    border-top-color: $color;
    border-radius: 50%;
    animation: spin 1s infinite;
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
  $size: 30px;

  position: relative;
  min-height: $size * 3;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(125,125,125,.2);
    backdrop-filter: blur(4px);
  }
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    margin: auto;
    width: $size;
    height: $size;
    border: 4px solid rgba(125,125,125,.5);
    border-top-color: var(--c-brand);
    border-radius: 50%;
    animation: spin 1s infinite;
  }
}
</style>