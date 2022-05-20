# Card

> 카드

## Examples

<div class="box box-row">
  <div class="card">
    <div class="card-thumb">
      <img src="http://via.placeholder.com/300x200" alt="">
    </div>
    <div class="card-body">
      <h3 class="card-title">
        <a href="#/">Card Title</a>
      </h3>
      <div class="card-text">
        <p>Veniam aliquip laborum id proident sint anim anim ea tempor proident veniam elit in velit.</p>
      </div>
    </div>
  </div>
  <!-- / card -->
  <!-- card horizontal -->
  <div class="card card-hrz">
    <div class="card-thumb">
      <img src="http://via.placeholder.com/300x200" alt="">
    </div>
    <div class="card-body">
      <h3 class="card-title">
        <a href="#/" class="stretched">Card Title</a>
      </h3>
      <div class="card-text">
        <p>Veniam aliquip laborum id proident sint anim anim ea tempor proident veniam elit in velit.</p>
      </div>
    </div>
  </div>
  <!-- / card horizontal -->
</div>

## Codes

<CodeGroup>
  <CodeGroupItem title="html">

```html{18,25}
<div class="card">
  <div class="card-thumb">
    <img src="http://via.placeholder.com/300x200" alt="">
  </div>

  <div class="card-body">
    <h3 class="card-title">
      <a href="#/">Card Title</a>
    </h3>
    <div class="card-text">
      <p>Veniam aliquip laborum id proident sint anim anim ea tempor proident veniam elit in velit.</p>
    </div>
  </div>
</div>
<!-- / card -->

<!-- card horizontal, stretched link -->
<div class="card card-hrz">
  <div class="card-thumb">
    <img src="http://via.placeholder.com/300x200" alt="">
  </div>

  <div class="card-body">
    <h3 class="card-title">
      <a href="#/" class="stretched">Card Title</a>
    </h3>
    <div class="card-text">
      <p>Veniam aliquip laborum id proident sint anim anim ea tempor proident veniam elit in velit.</p>
    </div>
  </div>
</div>
<!-- / card horizontal -->
```

  </CodeGroupItem>
  <CodeGroupItem title="SCSS">

```scss
@mixin line-clamp($num) {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: $num;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card {
  $border-color: #ccc;
  $border-radius: 0.25rem;
  $thumbnail-height: 10em;
  $text-line: 2;

  position: relative;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  overflow: hidden;

  &-thumb {
    display: flex;
    align-items: center;
    justify-content: center;
    height: $thumbnail-height;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &-body {
    padding: 1rem;
  }
  &-title {
    margin: 0 0 0.5em;
  }
  &-text {
    @include line-clamp($text-line);

    p {
      margin: 0 0 0.5em;
    }
  }

  a {
    display: block;
    color: inherit;

    &.stretched {
      &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }
    }
  }

  &-hrz {
    display: flex;
    width: auto;

    .card-thumb {
      width: 20em;
      flex: 0 0 auto;
    }
  }
}
```

  </CodeGroupItem>
</CodeGroup>

<style lang="scss" scoped>
@mixin line-clamp($num) {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: $num;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card {
  $border-color: #ccc;
  $border-radius: 0.25rem;
  $thumbnail-height: 10em;
  $text-line: 2;

  position: relative;
  width: 20em;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  overflow: hidden;

  &-thumb {
    display: flex;
    align-items: center;
    justify-content: center;
    height: $thumbnail-height;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &-body {
    padding: 1rem;
  }
  &-title {
    margin: 0 0 0.5em;
  }
  &-text {
    @include line-clamp($text-line);

    p {
      margin: 0 0 0.5em;
    }
  }

  a {
    display: block;
    color: inherit;

    &.stretched {
      &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }
    }
  }

  &-hrz {
    display: flex;
    width: auto;

    .card-thumb {
      width: 15em;
      flex: 0 0 auto;
    }
  }
}
</style>