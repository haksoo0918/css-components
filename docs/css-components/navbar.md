---
prev: loading.md
next: pagination.md
---

# Navbar

> 상단 네비게이션 바

## Examples

<div class="box box-row">
  <header class="hs-navbar">
    <div class="container">
      <h1 class="hs-navbar-brand">
        <a href="#/">Brand</a>
      </h1>
      <nav class="hs-navbar-center gnb">
        <a class="active" href="#/">menu 1</a>
        <a href="#/">menu 2</a>
        <a href="#/">menu 3</a>
      </nav>
      <div class="hs-navbar-end">
        <a href="#/" class="btn">Log-in</a>
      </div>
    </div>
  </header>
</div>

## Codes

<CodeGroup>
  <CodeGroupItem title="html">

```html
<header class="navbar">
  <div class="container">
    <h1 class="navbar-brand">
      <a href="#/">Brand</a>
    </h1>
    <nav class="navbar-center gnb">
      <a class="active" href="#/">menu 1</a>
      <a href="#/">menu 2</a>
      <a href="#/">menu 3</a>
    </nav>
    <div class="navbar-end">
      <a href="#/" class="btn">Log-in</a>
    </div>
  </div>
</header>
```

  </CodeGroupItem>
  <CodeGroupItem title="SCSS">

```scss
.navbar {
  $padding-y: 0.5rem;
  $bg-color: #8883;

  padding: $padding-y 0;
  background-color: $bg-color;

  &-brand {
    margin: 0;
    font-size: 24px;
  }
  &-center {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  &-end {
    margin-left: auto;
  }

  .container {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 1.5rem;
  }

  .gnb {
    display: flex;

    a {
      display: block;
      padding: 0.5em 1em;

      &.active {
        font-weight: bold;
      }
    }
  }

  .btn {
    display: block;
  }
}
```

  </CodeGroupItem>
</CodeGroup>

<style lang="scss" scoped>
.hs {
  &-navbar {
    $padding-y: 0.5rem;
    $bg-color: #8883;

    padding: $padding-y 0;
    background-color: $bg-color;

    &-brand {
      margin: 0;
      font-size: 24px;
    }
    &-center {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
    &-end {
      margin-left: auto;
    }

    .container {
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0 1.5rem;
    }

    .gnb {
      display: flex;

      a {
        display: block;
        padding: 0.5em 1em;

        &.active {
          font-weight: bold;
        }
      }
    }

    .btn {
      display: block;
    }
  }
}
</style>