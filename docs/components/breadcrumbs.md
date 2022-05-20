# Breadcrumbs

> 방문 페이지 위치 표시

## Examples

<div class="box">
  <ol class="breadcrumbs">
    <li><a href="#/">Home</a></li>
    <li><a href="#/">Parent Page</a></li>
    <li>Current Page</li>
  </ol>
</div>

## Codes

<CodeGroup>
  <CodeGroupItem title="html">

```html
<!-- 구분자 '/' 사용 -->
<ol class="breadcrumbs">
  <li><a href="/">Home</a></li>
  <li><a href="#/">Parent Page</a></li>
  <li>Current Page</li>
</ol>
```

  </CodeGroupItem>
  <CodeGroupItem title="SCSS">

```scss
.breadcrumbs {
  $divider: '/';
  $divider-padding-x: 0.5em;
  $divider-opacity: 0.5;

  display: flex;
  margin: 0.5em 0;
  padding: 0;
  list-style: none;

  li {
    &:not(:first-child) {
      &::before {
        content: $divider;
        padding: 0 $divider-padding-x;
        font-size: 0.8em;
        opacity: $divider-opacity;
      }
    }
  }
}
```

  </CodeGroupItem>
</CodeGroup>

<style lang="scss" scoped>
.breadcrumbs {
  $divider: '/';
  $divider-padding-x: 0.5em;
  $divider-opacity: 0.5;

  display: flex;
  margin: 0.5em 0;
  padding: 0;
  list-style: none;

  li {
    &:not(:first-child) {
      &::before {
        content: $divider;
        padding: 0 $divider-padding-x;
        font-size: 0.8em;
        opacity: $divider-opacity;
      }
    }
  }
}
</style>
