---
prev: empty.md
next: loading.md
---

# Image

> 이미지 활용

## Examples

<div class="box box-row">
  <img class="img-fluid" src="http://placekitten.com/800/300" alt="">
  <img class="img-block img-fluid" src="http://placekitten.com/200/200" alt="">
  <figure class="img-block">
    <img class="img-fluid" src="http://placekitten.com/300/200" alt="">
    <figcaption>figure with figcaption</figcaption>
  </figure>
  <picture class="img-block">
    <source class="img-fluid" media="(min-width: 960px)" srcset="http://placekitten.com/600/300">
    <source class="img-fluid" media="(min-width: 320px)" srcset="http://placekitten.com/400/300">
    <img class="img-fluid" src="http://placekitten.com/300/300" alt="">
  </picture>
</div>

## Codes

<CodeGroup>
  <CodeGroupItem title="html">

```html
<!-- fluid image -->
<img class="img-fluid" src="http://placekitten.com/800/300" alt="">

<!-- center & block -->
<img class="img-block img-fluid" src="http://placekitten.com/200/200" alt="">

<!-- figure with figcaption -->
<figure class="img-block">
  <img class="img-fluid" src="http://placekitten.com/300/200" alt="">
  <figcaption>figure with figcaption</figcaption>
</figure>

<!-- picture for responsive -->
<picture class="img-block">
  <source class="img-fluid" media="(min-width: 960px)" srcset="http://placekitten.com/600/300">
  <source class="img-fluid" media="(min-width: 320px)" srcset="http://placekitten.com/400/300">
  <img class="img-fluid" src="http://placekitten.com/300/300" alt="">
</picture>
```

  </CodeGroupItem>
  <CodeGroupItem title="SCSS">

```scss
.img {
  &-fluid {
    max-width: 100%;
    height: auto;
  }
  &-block {
    display: block;
    margin: 1rem auto;
    text-align: center;
  }
}
```

  </CodeGroupItem>
</CodeGroup>

<style lang="scss" scoped>
.img {
  &-fluid {
    max-width: 100%;
    height: auto;
  }
  &-block {
    display: block;
    margin: 1rem auto;
    text-align: center;
  }
}
</style>