# Pagination

> 페이지네이션

## Examples

<div class="box box-row">
  <nav class="pagination">
    <ul class="pn-list">
      <li class="pn-item disabled">
        <a class="pn-link">처음</a>
      </li>
      <li class="pn-item">
        <a class="pn-link" href="#/">이전</a>
      </li>
      <li class="pn-item">
        <a class="pn-link" href="#/">1</a>
      </li>
      <li class="pn-item active">
        <a class="pn-link" href="#/">2</a>
      </li>
      <li class="pn-item">
        <a class="pn-link" href="#/">3</a>
      </li>
      <li class="pn-item disabled">
        <span class="pn-link">…</span>
      </li>
      <li class="pn-item">
        <a class="pn-link" href="#/">다음</a>
      </li>
      <li class="pn-item">
        <a class="pn-link" href="#/">끝</a>
      </li>
    </ul>
  </nav>
  <!-- | -->
  <nav class="pagination pagination-division">
    <ul class="pn-list">
      <li class="pn-item disabled">
        <a class="pn-link">처음</a>
      </li>
      <li class="pn-item">
        <a class="pn-link" href="#/">이전</a>
      </li>
      <li class="pn-item">
        <a class="pn-link" href="#/">1</a>
      </li>
      <li class="pn-item active">
        <a class="pn-link" href="#/">2</a>
      </li>
      <li class="pn-item">
        <a class="pn-link" href="#/">3</a>
      </li>
      <li class="pn-item disabled">
        <span class="pn-link">…</span>
      </li>
      <li class="pn-item">
        <a class="pn-link" href="#/">다음</a>
      </li>
      <li class="pn-item">
        <a class="pn-link" href="#/">끝</a>
      </li>
    </ul>
  </nav>
</div>

## Codes

<CodeGroup>
  <CodeGroupItem title="html">

```html{3-4,12,31}
<nav class="pagination">
  <ul class="pn-list">
    <li class="pn-item disabled">
      <a class="pn-link">처음</a>
    </li>
    <li class="pn-item">
      <a class="pn-link" href="#/">이전</a>
    </li>
    <li class="pn-item">
      <a class="pn-link" href="#/">1</a>
    </li>
    <li class="pn-item active">
      <a class="pn-link" href="#/">2</a>
    </li>
    <li class="pn-item">
      <a class="pn-link" href="#/">3</a>
    </li>
    <li class="pn-item disabled">
      <span class="pn-link">…</span>
    </li>
    <li class="pn-item">
      <a class="pn-link" href="#/">다음</a>
    </li>
    <li class="pn-item">
      <a class="pn-link" href="#/">끝</a>
    </li>
  </ul>
</nav>

<!-- 구분된 디자인 -->
<nav class="pagination pagination-division">
  <!-- 생략 ... -->
</nav>
```

  </CodeGroupItem>
  <CodeGroupItem title="SCSS">

```scss
.pagination {
  $bg-color: #000;
  $link-color: #7fff00;
  $border-color: #ccc;
  $border-radius: 4px;
  $gap: 0;
  $align: center;

  display: flex;
  justify-content: $align;
  padding: 2rem 0;

  .pn {
    &-list {
      margin: 0;
      padding: 0;
      display: flex;
      gap: $gap;
      list-style: none;
    }
    &-item {
      &:first-child {
        .pn-link {
          border-top-left-radius: $border-radius;
          border-bottom-left-radius: $border-radius;
        }
      }
      &:last-child {
        .pn-link {
          border-top-right-radius: $border-radius;
          border-bottom-right-radius: $border-radius;
        }
      }
      &.active {
        .pn-link {
          color: $bg-color;
          border-color: $link-color;
          background-color: $link-color;
          pointer-events: none;
        }
      }
      &.disabled {
        .pn-link {
          color: #aaa;
          pointer-events: none;
        }
      }
    }
    &-link {
      display: block;
      margin-left: -1px;
      padding: 0.5rem 1rem;
      border: 1px solid $border-color;
      transition: all 0.3s;

      &:hover {
        background-color: #8883;
      }
    }
  }

  // 구분된 디자인
  &-division {
    $gap: 0.5rem;

    .pn-list {
      gap: $gap;
    }
    .pn-link {
      margin-left: 0;
      border-radius: $border-radius;
    }
  }
}
```

  </CodeGroupItem>
</CodeGroup>

<style lang="scss" scoped>
.pagination {
  $bg-color: #000;
  $link-color: #7fff00;
  $border-color: #ccc;
  $border-radius: 4px;
  $gap: 0;
  $align: center;

  display: flex;
  justify-content: $align;
  padding: 2rem 0;

  .pn {
    &-list {
      margin: 0;
      padding: 0;
      display: flex;
      gap: $gap;
      list-style: none;
    }
    &-item {
      &:first-child {
        .pn-link {
          border-top-left-radius: $border-radius;
          border-bottom-left-radius: $border-radius;
        }
      }
      &:last-child {
        .pn-link {
          border-top-right-radius: $border-radius;
          border-bottom-right-radius: $border-radius;
        }
      }
      &.active {
        .pn-link {
          color: var(--c-bg);
          border-color: var(--c-brand);
          background-color: var(--c-brand);
          pointer-events: none;
        }
      }
      &.disabled {
        .pn-link {
          color: #aaa;
          pointer-events: none;
        }
      }
    }
    &-link {
      display: block;
      margin-left: -1px;
      padding: 0.5rem 1rem;
      border: 1px solid $border-color;
      transition: all 0.3s;

      &:hover {
        background-color: #8883;
      }
    }
  }

  // 구분된 디자인
  &-division {
    $gap: 0.5rem;

    .pn-list {
      gap: $gap;
    }
    .pn-link {
      margin-left: 0;
      border-radius: $border-radius;
    }
  }
}
</style>