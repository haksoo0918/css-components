# Tag

> 태그

## Examples

<div class="box">
  <a href="#/" class="h-tag">tag</a>
  <span class="h-tag">tag<button class="btn-close" type="button" title="close">&times;</button></span>
</div>

## Codes

<CodeGroup>
  <CodeGroupItem title="html">

```html
<!-- link tag -->
<a href="#/" class="tag">tag</a>

<!-- tag with close button -->
<span class="tag">tag<button class="btn-close" type="button" title="close">&times;</button></span>
```

  </CodeGroupItem>
  <CodeGroupItem title="SCSS">

```scss
.tag {
  $color: #7fff00;
  $border-radius: 4px;

  display: inline-block;
  padding: 0.3em 0.6em;
  border-radius: $border-radius;
  background-color: $color;
  font-size: 0.8rem;

  .btn-close {
    margin-left: 0.3em;
    padding: 0 0.2em;
    border: none;
    color: $color;
    background-color: transparent;
    cursor: pointer;
  }
}
```

  </CodeGroupItem>
</CodeGroup>

<style lang="scss" scoped>
.h {
  &-tag {
    display: inline-block;
    padding: 0.3em 0.6em;
    color: var(--c-bg);
    border-radius: 4px;
    background-color: var(--c-brand);
    font-size: 0.8rem;

    .btn-close {
      margin-left: 0.3em;
      padding: 0 0.2em;
      border: none;
      color: var(--c-bg);
      background-color: transparent;
      cursor: pointer;
    }
  }
}
</style>